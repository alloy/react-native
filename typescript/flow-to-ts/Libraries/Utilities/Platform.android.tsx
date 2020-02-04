yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/Platform.android.js
'use strict';












import NativePlatformConstantsAndroid from "./NativePlatformConstantsAndroid";

export type PlatformSelectSpec<A, N, D> = {
  android?: A;
  native?: N;
  default?: D;

};

const Platform = {
  __constants: null,
  OS: 'android',
  get Version(): number {
    return this.constants.Version;
  },
  get constants(): {
    isTesting: boolean;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: number | null | undefined;
    };
    Version: number;
    Release: string;
    Serial: string;
    Fingerprint: string;
    Model: string;
    ServerHost?: string;
    uiMode: string;
  } {
    if (this.__constants == null) {
      this.__constants = NativePlatformConstantsAndroid.getConstants();
    }
    return this.__constants;
  },
  get isTesting(): boolean {
    if (__DEV__) {
      return this.constants.isTesting;
    }
    return false;
  },
  get isTV(): boolean {
    return this.constants.uiMode === 'tv';
  },
  select: <A, N, D>(spec: PlatformSelectSpec<A, N, D>): A | N | D => 'android' in spec ? spec.android : 'native' in spec ? spec.native : spec.default
};

module.exports = Platform;
Done in 0.47s.
