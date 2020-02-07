// @ts-check

const { CallExpression, Identifier, Literal, ObjectPattern, Program, Property, VariableDeclaration, VariableDeclarator } = require('jscodeshift');

/**
 * @param { import("jscodeshift").VariableDeclaration } node
 */
function getVariableDeclarator(node) {
    const declarator = node.declarations[0];
    if (VariableDeclarator.check(declarator)) {
        return declarator;
    } else {
        throw new Error('[!] Expected VariableDeclarator');
    }
}

/**
 * Alas, can't define type guards using js+jsdoc
 *
 * @param { import("jscodeshift").Expression } node
 */
function getRequireExpression(node) {
    if (CallExpression.check(node)) {
        const callee = node.callee;
        if (Identifier.check(callee) && callee.name === 'require') {
            return node;
        }
    }
    return null;
}

/**
 * @param { import("jscodeshift").VariableDeclaration } node
 */
function getRequire(node) {
    const declarator = getVariableDeclarator(node);
    const requireNode = getRequireExpression(declarator.init);
    return requireNode;
}

/**
 * @param { import("jscodeshift").ASTPath<any> } path
 * @returns { null | import("jscodeshift").ASTPath<import("jscodeshift").VariableDeclarator> }
 */
function findVariableDeclarator(path) {
    let declarator = path.parent;
    while (declarator && !VariableDeclarator.check(declarator.node)) {
        declarator = declarator.parent;
    }
    return declarator;
}

/**
 * @type { import("jscodeshift").Transform }
 */
const transformer = (file, api, options) => {
    const j = api.jscodeshift;
    let i = 0;

    const collection = j(file.source);
    const expressions = [];

    collection
        .find(CallExpression, node => Identifier.check(node.callee) && node.callee.name === 'require')
        .forEach(path => {
            const source = path.node.arguments[0];
            if (Literal.check(source)) {
                const declarator = findVariableDeclarator(path);
                console.log(declarator);
                if (declarator) {
                    const id = declarator.node.id;
                    if (Identifier.check(id)) {
                        const specifiers = [j.importDefaultSpecifier(id)];
                        expressions.push(j.importDeclaration(specifiers, source));
                    } else if (ObjectPattern.check(id)) {
                        const specifiers = id.properties.map(property => {
                            if (Property.check(property)) {
                                if (Identifier.check(property.key)) {
                                    return j.importSpecifier(property.key);
                                } else {
                                    throw new Error('[!] Expected identifier key');
                                }
                            } else {
                                throw new Error('[!] Expected Property');
                            }
                        });
                        expressions.push(j.importDeclaration(specifiers, source));
                    } else {
                        throw new Error('[!] Default import expected');
                    }
                    return true;
                }
            } else {
                throw new Error('[!] String-literal expected');
            }
        });

    // collection
    //     .find(VariableDeclaration)
    //     .map(path => {
    //         const requireNode = getRequire(node);

    //     })
    //     .replaceWith(({ node }) => {
            
    //         const declarator = getVariableDeclarator(node);
    //         const requireNode = getRequireExpression(declarator.init);
    //         if (requireNode) {
    //             const source = requireNode.arguments[0];
    //             if (Literal.check(source)) {
    //                 if (Identifier.check(declarator.id)) {
    //                     const specifiers = [j.importDefaultSpecifier(declarator.id)];
    //                     expressions.push(j.importDeclaration(specifiers, source));
    //                 } else if (ObjectPattern.check(declarator.id)) {
    //                     const specifiers = declarator.id.properties.map(property => {
    //                         if (Property.check(property)) {
    //                             if (Identifier.check(property.key)) {
    //                                 return j.importSpecifier(property.key);
    //                             } else {
    //                                 throw new Error('[!] Expected identifier key');
    //                             }
    //                         } else {
    //                             throw new Error('[!] Expected Property');
    //                         }
    //                     });
    //                     expressions.push(j.importDeclaration(specifiers, source));
    //                 } else {
    //                     throw new Error('[!] Default import expected');
    //                 }
    //                 return true;
    //             } else {
    //                 throw new Error('[!] String-literal expected');
    //             }
    //         }
    //         return false;
    //     });

    // Hoist imports to top-level
    collection.find(Program).forEach(path => {
        const body = path.node.body;
        expressions.reverse().forEach(expression => {
            body.unshift(expression);
        });
    });

    return collection.toSource();
};

module.exports = transformer;
