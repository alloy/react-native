yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Storage/NativeAsyncStorage.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly multiGet: (keys: Array<string>, callback: (errors: Array<{message: string;}> | null | undefined, kvPairs: Array<Array<string>> | null | undefined) => void) => void;
  readonly multiSet: (kvPairs: Array<Array<string>>, callback: (errors: Array<{message: string;}> | null | undefined) => void) => void;
  readonly multiMerge: (kvPairs: Array<Array<string>>, callback: (errors: Array<{message: string;}> | null | undefined) => void) => void;
  readonly multiRemove: (keys: Array<string>, callback: (errors: Array<{message: string;}> | null | undefined) => void) => void;
  readonly clear: (callback: (error: {message: string;}) => void) => void;
  readonly getAllKeys: (callback: (error: {message: string;} | null | undefined, allKeys: Array<string> | null | undefined) => void) => void;
}

export default (TurboModuleRegistry.get<Spec>('AsyncSQLiteDBStorage') || TurboModuleRegistry.get<Spec>('AsyncLocalStorage') as Spec | null | undefined);
Done in 0.48s.
