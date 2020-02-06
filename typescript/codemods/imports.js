// @ts-check

const { CallExpression, Identifier, ObjectPattern, ObjectProperty, StringLiteral, VariableDeclaration, VariableDeclarator } = require('jscodeshift');

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
    return getRequireExpression(getVariableDeclarator(node).init);
}

/**
 * @type { import("jscodeshift").Transform }
 */
const transformer = (file, api, options) => {
    const j = api.jscodeshift;
    let i = 0;

    return j(file.source)
        .find(VariableDeclaration, node => !!getRequire(node))
        .replaceWith(({ node }) => {
            const declarator = getVariableDeclarator(node);
            const req = getRequireExpression(declarator.init);
            const source = req.arguments[0];
            if (StringLiteral.check(source)) {
                if (Identifier.check(declarator.id)) {
                    const specifiers = [j.importDefaultSpecifier(declarator.id)];
                    return j.importDeclaration(specifiers, source);
                } else if (ObjectPattern.check(declarator.id)) {
                    const tmpVar = j.identifier(`_Import${i++}`);
                    return [
                        j.importDeclaration([j.importDefaultSpecifier(tmpVar)], source),
                        j.variableDeclaration(node.kind, [j.variableDeclarator(declarator.id, tmpVar)]),
                    ];
                } else {
                    throw new Error('[!] Default import expected');
                }
            } else {
                throw new Error('[!] String-literal expected');
            }
        })
        .toSource();
};

module.exports = transformer;
