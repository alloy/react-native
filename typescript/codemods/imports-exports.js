// @ts-check

const {
    AssignmentExpression,
    CallExpression,
    ExpressionStatement,
    Identifier,
    Literal,
    MemberExpression,
    Program,
    VariableDeclaration,
    VariableDeclarator,
} = require('jscodeshift');

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
    const parent = path.parent;
    if (VariableDeclarator.check(parent.node)) {
        return parent;
    } else {
        const expression = parent.node;
        if (MemberExpression.check(expression) && Identifier.check(expression.property) && expression.property.name === 'default') {
            if (VariableDeclarator.check(parent.parent.node)) {
                return parent.parent;
            }
        }
    }
    return null;
}

/**
 * @type { import("jscodeshift").Transform }
 */
const transformer = (file, api, options) => {
    const j = api.jscodeshift;
    let i = 0;

    const collection = j(file.source);
    const expressions = [];

    /**
     * require
     */
    collection
        .find(CallExpression, node => Identifier.check(node.callee) && node.callee.name === 'require')
        .forEach(requirePath => {
            const source = requirePath.node.arguments[0];
            if (Literal.check(source)) {
                const variableDeclarator = findVariableDeclarator(requirePath);
                // const variableDeclarator = VariableDeclarator.check(requirePath.parent.node)
                //     ? requirePath.parent
                //     // : null;
                //     : (MemberExpression.check(requirePath.parent.node) && VariableDeclarator.check(requirePath.parent.parent) ? )
                if (variableDeclarator) {
                    const id = variableDeclarator.node.id;
                    const declaration = variableDeclarator.parent;
                    if (Identifier.check(id) && VariableDeclaration.assert(declaration.node) && declaration.node.kind === 'const') {
                        declaration.replace(null);
                        const specifiers = [j.importDefaultSpecifier(id)];
                        expressions.push(j.importDeclaration(specifiers, source));
                    } else {
                        const tmpVar = j.identifier(`_Import${i++}`);
                        const specifiers = [j.importDefaultSpecifier(tmpVar)];
                        requirePath.replace(tmpVar);
                        expressions.push(j.importDeclaration(specifiers, source));
                    }
                } else if (ExpressionStatement.check(requirePath.parent.node)) {
                    // This is the only expression, e.g. `require("foo");`
                    expressions.push(j.importDeclaration([], source));
                    requirePath.replace(null);
                } else {
                    const tmpVar = j.identifier(`_Import${i++}`);
                    expressions.push(j.importDeclaration([j.importDefaultSpecifier(tmpVar)], source));
                    requirePath.replace(tmpVar);
                }
            } else {
                throw new Error('[!] String-literal expected');
            }
        });
    // Hoist imports to top-level
    collection.find(Program).forEach(path => {
        const body = path.node.body;
        expressions.reverse().forEach(expression => {
            body.unshift(expression);
        });
    });

    /**
     * module.exports
     */
    collection
        .find(AssignmentExpression, node => {
            const left = node.left;
            return (
                MemberExpression.check(left)
                && Identifier.check(left.object) && left.object.name === 'module'
                && Identifier.check(left.property) && left.property.name === 'exports'
            );
        })
        .forEach(path => {
            path.replace(j.exportDefaultDeclaration(path.node.right));
        });

    return collection.toSource();
};

module.exports = transformer;
module.exports.parser = 'tsx';