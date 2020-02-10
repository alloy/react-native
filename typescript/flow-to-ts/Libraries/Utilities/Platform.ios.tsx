'use strict';












import NativePlatformConstantsIOS from "./NativePlatformConstantsIOS";

export type PlatformSelectSpec<D, N, I> = {
  default?: D;
  native?: N;
  ios?: I;

};

const Platform = {
  __constants: null,
  OS: 'ios',
  get Version(): string {
    return this.constants.osVersion;
  },
  get constants(): {
    forceTouchAvailable: boolean;
    interfaceIdiom: string;
    isTesting: boolean;
    osVersion: string;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: number | null | undefined;
    };
    systemName: string;
  } {
    if (this.__constants == null) {
      this.__constants = NativePlatformConstantsIOS.getConstants();
    }
    return this.__constants;
  },
  get isPad(): boolean {
    return this.constants.interfaceIdiom === 'pad';
  },

  /**
   * Deprecated, use `isTV` instead.
   */
  get isTVOS(): boolean {
    return Platform.isTV;
  },
  get isTV(): boolean {
    return this.constants.interfaceIdiom === 'tv';
  },
  get isTesting(): boolean {
    if (__DEV__) {
      return this.constants.isTesting;
    }
    return false;
  },
  select: <D, N, I>(spec: PlatformSelectSpec<D, N, I>): D | N | I => 'ios' in spec ? spec.ios : 'native' in spec ? spec.native : spec.default
};

export default Platform;;
