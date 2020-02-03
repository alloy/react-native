'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export type Args = {
  title?: string;
  message?: string;
  buttons?: Array<Object>; // TODO: have a better type
  type?: string;
  defaultValue?: string;
  cancelButtonKey?: string;
  destructiveButtonKey?: string;
  keyboardType?: string;
};

export interface Spec extends TurboModule {
  readonly alertWithArgs: (args: Args, callback: (id: number, value: string) => void) => void;
}

export default (TurboModuleRegistry.get<Spec>('AlertManager') as Spec | null | undefined);