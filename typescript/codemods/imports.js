// @ts-check

const { CallExpression, Identifier, ObjectPattern, ObjectProperty, StringLiteral, VariableDeclaration, VariableDeclarator } = require('jscodeshift');

/**
 * @param { import("jscodeshift").VariableDeclaration } node
 */
function getVariableDeclaration(node) {
    const declaration = node.declarations[0];
    if (VariableDeclarator.check(declaration)) {
        return declaration;
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
    return getRequireExpression(getVariableDeclaration(node).init);
}

/**
 * @type { import("jscodeshift").Transform }
 */
const transformer = (file, api, options) => {
    const j = api.jscodeshift;

    return j(file.source)
        .find(VariableDeclaration, node => !!getRequire(node))
        .replaceWith(({ node }) => {
            const declaration = getVariableDeclaration(node);
            const req = getRequireExpression(declaration.init);
            const source = req.arguments[0];
            if (StringLiteral.check(source)) {
                if (Identifier.check(declaration.id)) {
                    const specifiers = [j.importDefaultSpecifier(declaration.id)];
                    return j.importDeclaration(specifiers, source);
                } else if (ObjectPattern.check(declaration.id)) {
                    const specifiers = declaration.id.properties.map(property => {
                        if (ObjectProperty.check(property)) {
                            if (!property.shorthand) {
                                throw new Error('[!] Shorthand property expected');
                            }
                            const name = property.key;
                            if (Identifier.check(name)) {
                                return j.importSpecifier(name);
                            } else {
                                throw new Error('[!] String property key expected');
                            }
                        } else {
                            console.log(property);
                            throw new Error('[!] ObjectProperty expected');
                        }
                    });
                    return j.importDeclaration(specifiers, source);
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
