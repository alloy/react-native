// @ts-check

const {
    AssignmentExpression,
    CallExpression,
    ExpressionStatement,
    FunctionDeclaration,
    Identifier,
    Literal,
    MemberExpression,
    Program,
    TSTypeAnnotation,
    VariableDeclaration,
    VariableDeclarator,
} = require('jscodeshift');

/**
 * @type { import("jscodeshift").Transform }
 */
const transformer = (file, api, options) => {
    const j = api.jscodeshift;
    const collection = j(file.source);

    collection
        .find(FunctionDeclaration, node => {
            if (!node.returnType) {
                // console.log(`[!] Missing function return type annotation (${node.id.name})`)
                return false;
            }
            return true;
        })
        .replaceWith(({ node }) => {
            const statements = [];
            if (!(TSTypeAnnotation.check(node.returnType) && node.returnType.typeAnnotation.type === 'TSVoidKeyword')) {
                statements.push(j.returnStatement(j.tsAsExpression.from({
                    expression: j.literal(null),
                    typeAnnotation: j.tsAnyKeyword()
                })));
            }
            return ({
                ...node,
                body: j.blockStatement(statements)
            });
        });

    return collection.toSource();
};

module.exports = transformer;
module.exports.parser = 'tsx';