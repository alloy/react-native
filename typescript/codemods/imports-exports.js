// @ts-check

const {
    AssignmentExpression,
    CallExpression,
    ExpressionStatement,
    Identifier,
    Literal,
    MemberExpression,
    ObjectExpression,
    ObjectPattern,
    ObjectProperty,
    Program,
    VariableDeclarator
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

    /**
     * require
     */
    collection
        .find(CallExpression, node => Identifier.check(node.callee) && node.callee.name === 'require')
        .forEach(requirePath => {
            const source = requirePath.node.arguments[0];
            if (Literal.check(source)) {
                const variableDeclarator = findVariableDeclarator(requirePath);
                if (variableDeclarator) {
                    const tmpVar = j.identifier(`_Import${i++}`);
                    const specifiers = [j.importDefaultSpecifier(tmpVar)];
                    requirePath.replace(tmpVar);
                    expressions.push(j.importDeclaration(specifiers, source));
                } else if (ExpressionStatement.check(requirePath.parent.node)) {
                    // This is the only expression, e.g. `require("foo");`
                    expressions.push(j.importDeclaration([], source));
                    requirePath.replace(null);
                } else {
                    const tmpVar = j.identifier(`_Import${i++}`);
                    expressions.push(j.importDeclaration([j.importDefaultSpecifier(tmpVar)], source))
                    requirePath.replace(tmpVar);
                }
                return true;
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