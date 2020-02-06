General notes:

* TS doesn't have platform extension support, so perhaps a codemod needs to be used to rename imports and do a pass per platform. E.g. replace `import Platform from '../Utilities/Platform'` with `import Platform from '../Utilities/Platform.ios'`

## flow-to-ts

find Libraries -name '*.js' | grep -v -E '__tests__|__mocks__|__flowtests__' | xargs -I {} sh -c 'echo "$1:" && mkdir -p typescript/flow-to-ts/$(dirname "$1") && yarn --silent flow-to-ts "$1" > typescript/flow-to-ts/$(echo "$1" | sed \'s/\(.*\)js/\1tsx/\')' - {} 2>&1 | tee -a logs/flow-to-ts.log

Notes:
* `opaque` type isn't converted (typescript/flow-to-ts/Libraries/Blob/BlobTypes.tsx)
* needs extra parentheses around function, which Flow version actually has (in typescript/flow-to-ts/Libraries/Animated/src/AnimatedEvent.tsx):
    __getHandler(): any | (...args: any) => void {
* class static properties that are readonly are not converted from + to readonly (typescript/flow-to-ts/Libraries/Components/DatePickerAndroid/DatePickerAndroid.ios.tsx)
* `type Fn<Args, Return> = (...Args) => Return;` becomes `type Fn<Args, Return> = (...: Args) => Return;`, but should be `type Fn<Args extends ReadonlyArray<any>, Return> = (...args: Args) => Return;` (typescript/flow-to-ts/Libraries/polyfills/error-guard.tsx)
* `Object` should be converted to `any`, https://flow.org/en/docs/types/objects/#toc-object-type
* `Function` should be converted to `any`, https://flow.org/en/docs/types/functions/#toc-function-type

yarn jscodeshift --extensions=tsx --parser=tsx --transform=node_modules/5to6-codemod/transforms/exports.js typescript/flow-to-ts/**/*.tsx
yarn jscodeshift --extensions=tsx --parser=tsx --transform=node_modules/5to6-codemod/transforms/cjs.js typescript/flow-to-ts/**/*.tsx