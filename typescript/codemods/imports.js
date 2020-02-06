// @ts-check

const { CallExpression, Identifier, ObjectPattern, Program, StringLiteral, VariableDeclaration, VariableDeclarator } = require('jscodeshift');

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
 * @type { import("jscodeshift").Transform }
 */
const transformer = (file, api, options) => {
    const j = api.jscodeshift;
    let i = 0;

    const collection = j(file.source);
    const expressions = [];

    collection
        .find(VariableDeclaration, node => {
            const declarator = getVariableDeclarator(node);
            const requireNode = getRequireExpression(declarator.init);
            if (requireNode) {
                const source = requireNode.arguments[0];
                if (StringLiteral.check(source)) {
                    if (Identifier.check(declarator.id)) {
                        const specifiers = [j.importDefaultSpecifier(declarator.id)];
                        expressions.push(j.importDeclaration(specifiers, source));
                    } else if (ObjectPattern.check(declarator.id)) {
                        const tmpVar = j.identifier(`_Import${i++}`);
                        expressions.push(j.importDeclaration([j.importDefaultSpecifier(tmpVar)], source));
                        expressions.push(j.variableDeclaration(node.kind, [j.variableDeclarator(declarator.id, tmpVar)]));
                    } else {
                        throw new Error('[!] Default import expected');
                    }
                    return true;
                } else {
                    throw new Error('[!] String-literal expected');
                }
            }
            return false;
        })
        .remove();

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
