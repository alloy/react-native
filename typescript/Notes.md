## General:

* No codemod existed yet for `require` to `import`, so created one which exists in `typescript/codemods/imports.js`.
* TS doesn't have platform extension support, so perhaps a codemod needs to be used to rename imports and do a pass per platform. E.g. replace `import Platform from '../Utilities/Platform'` with `import Platform from '../Utilities/Platform.ios'`
* The TS conversion led to finding a type error in `Libraries/Text/Text.js` where:
  - a prop is `?string`: https://github.com/facebook/react-native/blob/1e9db7bd6df3055b9b81d23f15a54bb250621a41/Libraries/Text/TextProps.js#L161
  - but it’s used: https://github.com/facebook/react-native/blob/1e9db7bd6df3055b9b81d23f15a54bb250621a41/Libraries/Text/Text.js#L141
  - there where `?number` is expected: https://github.com/facebook/react-native/blob/1e9db7bd6df3055b9b81d23f15a54bb250621a41/Libraries/StyleSheet/processColor.js#L18
* Some third-party DT types will have tyo be improved, e.g. the `promise` package, which is used in `Libraries/promiseRejectionIsError.js`
* In `typescript/flow-to-ts/Libraries/Animated/src/AnimatedEvent.tsx` the export should be `export { AnimatedEvent, attachNativeEvent }` and the import in `typescript/flow-to-ts/Libraries/Animated/src/AnimatedImplementation.tsx` should be `import { AnimatedEvent, attachNativeEvent } from …`.
* Inline `require(…)` calls that are not stored in variables are currently not converted by the `imports.js` codemod. E.g. in `typescript/flow-to-ts/Libraries/Promise.tsx`

## flow-to-ts

```bash
find Libraries -name '*.js' | grep -v -E '__tests__|__mocks__|__flowtests__' | xargs -I {} sh -c 'echo "$1:" && mkdir -p typescript/flow-to-ts/$(dirname "$1") && yarn --silent flow-to-ts "$1" > typescript/flow-to-ts/$(echo "$1" | sed \'s/\(.*\)js/\1tsx/\')' - {} 2>&1 | tee -a logs/flow-to-ts.log
yarn jscodeshift --extensions=tsx --parser=tsx --transform=typescript/codemods/imports-exports.js typescript/flow-to-ts/**/*.tsx
```

Faster, but can't log from flow-to-ts:
```bash
find Libraries -name '*.js' | grep -v -E '__tests__|__mocks__|__flowtests__' | xargs -P 4 -I {} sh -c 'echo "$1:" && mkdir -p typescript/flow-to-ts/$(dirname "$1") && yarn --silent flow-to-ts "$1" > typescript/flow-to-ts/$(echo "$1" | sed \'s/\(.*\)js/\1tsx/\')' - {}
yarn jscodeshift --extensions=tsx --parser=tsx --transform=typescript/codemods/imports-exports.js typescript/flow-to-ts/**/*.tsx
```

* ~~`opaque` type isn't converted (`typescript/flow-to-ts/Libraries/Blob/BlobTypes.tsx`)~~
* ~~needs extra parentheses around function, which Flow version actually has (in `typescript/flow-to-ts/Libraries/Animated/src/AnimatedEvent.tsx`): `__getHandler(): any | (...args: any) => void {`~~
* ~~class static properties that are readonly are not converted from + to readonly (`typescript/flow-to-ts/Libraries/Components/DatePickerAndroid/DatePickerAndroid.ios.tsx`)~~
* ~~`Object` should be converted to `any`, https://flow.org/en/docs/types/objects/#toc-object-type~~
* ~~`Function` should be converted to `any`, https://flow.org/en/docs/types/functions/#toc-function-type~~
* `type Fn<Args, Return> = (...Args) => Return;` becomes `type Fn<Args, Return> = (...: Args) => Return;`, but should be `type Fn<Args extends ReadonlyArray<any>, Return> = (...args: Args) => Return;` (`typescript/flow-to-ts/Libraries/polyfills/error-guard.tsx`)
