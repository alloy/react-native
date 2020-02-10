'use strict';












import { TurboModule } from "../../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../../TurboModule/TurboModuleRegistry";

/* 'buttonClicked' | 'dismissed' */
type DialogAction = string;

/*
  buttonPositive = -1,
  buttonNegative = -2,
  buttonNeutral = -3
*/
type DialogButtonKey = number;
export type DialogOptions = {
  title?: string;
  message?: string;
  buttonPositive?: string;
  buttonNegative?: string;
  buttonNeutral?: string;
  items?: Array<string>;
  cancelable?: boolean;
};

export interface Spec extends TurboModule {
  readonly getConstants: (() => {
    readonly buttonClicked: DialogAction;
    readonly dismissed: DialogAction;
    readonly buttonPositive: DialogButtonKey;
    readonly buttonNegative: DialogButtonKey;
    readonly buttonNeutral: DialogButtonKey;
  });
  readonly showAlert: ((config: DialogOptions, onError: ((error: string) => void), onAction: ((action: DialogAction, buttonKey?: DialogButtonKey) => void)) => void);
}

export default (TurboModuleRegistry.get<Spec>('DialogManagerAndroid') as Spec | null | undefined);
