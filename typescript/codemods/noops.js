// @ts-check

const {
    FunctionDeclaration,
    Identifier,
    ImportDeclaration,
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

    // /**
    //  * @type { Map<string, [number, import("jscodeshift").ImportDeclaration]> }
    //  */
    // const imports = new Map();
    // collection
    //     .find(ImportDeclaration)
    //     .forEach(({ node: importDeclaration }) => {
    //         importDeclaration.specifiers.forEach(specifier => {
    //             const id = specifier.local;
    //             if (Identifier.check(id)) {
    //                 const count = collection.find(Identifier, node => node.name === id.name).length;
    //                 if (count) {
    //                     imports.set(id.name, [count, importDeclaration]);
    //                 }
    //             } else {
    //                 throw new Error(`[!] Unexpected specifier identifier: ${id}`);
    //             }
    //         });
    //     });

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

    collection
        .find(ImportDeclaration)
        .forEach(importDeclaration => {
            const specifiers = importDeclaration.node.specifiers.filter(specifier => {
                const id = specifier.local;
                if (Identifier.check(id)) {
                    const count = collection
                        .find(Identifier, node => node.name === id.name)
                        .filter(path => path.parent.node !== specifier)
                        .length;
                    return count > 0;
                } else {
                    throw new Error(`[!] Unexpected specifier identifier: ${id}`);
                }
            });
            if (specifiers.length === 0) {
                importDeclaration.replace(null);
            } else if (specifiers.length < importDeclaration.node.specifiers.length) {
                importDeclaration.replace(j.importDeclaration(specifiers, importDeclaration.node.source));
            }
        });

    return collection.toSource();
};

module.exports = transformer;
module.exports.parser = 'tsx';
