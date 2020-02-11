// @ts-check

const {
    FunctionDeclaration,
    ObjectMethod,
    Node,
    TSTypeAnnotation,
} = require('jscodeshift');

/**
 * @type { import("jscodeshift").Transform }
 */
const transformer = (file, api, options) => {
    const j = api.jscodeshift;
    const collection = j(file.source);

    collection
        .find(Node, node => {
            if (FunctionDeclaration.check(node) || ObjectMethod.check(node)) {
                if (!node.returnType) {
                    // console.log(`[!] Missing function return type annotation (${node.id.name})`)
                    return false;
                }
                return true;
            }
        })
        .replaceWith(path => {
            const node = path.node;
            if (FunctionDeclaration.check(node) || ObjectMethod.check(node)) {
                const statements = [];
                if (!(TSTypeAnnotation.check(node.returnType) && node.returnType.typeAnnotation.type === 'TSVoidKeyword')) {
                    statements.push(j.returnStatement(j.tsAsExpression.from({
                        expression: j.literal(null),
                        typeAnnotation: j.tsAnyKeyword(),
                    })));
                }
                return ({
                    ...node,
                    body: j.blockStatement(statements),
                });
            }
        });

    return collection.toSource();
};

module.exports = transformer;
module.exports.parser = 'tsx';
