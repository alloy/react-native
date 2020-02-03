'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {
    readonly HEIGHT: number;
    readonly DEFAULT_BACKGROUND_COLOR?: number;
  };
  // TODO(T47754272) Can we remove this method?
  readonly getHeight: (callback: (result: {height: number;}) => void) => void;
  readonly setNetworkActivityIndicatorVisible: (visible: boolean) => void;
  readonly addListener: (eventType: string) => void;
  readonly removeListeners: (count: number) => void;

  /**
   *  - statusBarStyles can be:
   *    - 'default'
   *    - 'dark-content'
   *    - 'light-content'
   */
  readonly setStyle: (statusBarStyle?: string | null | undefined, animated: boolean) => void;

  /**
   *  - withAnimation can be: 'none' | 'fade' | 'slide'
   */
  readonly setHidden: (hidden: boolean, withAnimation: string) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('StatusBarManager') as Spec);