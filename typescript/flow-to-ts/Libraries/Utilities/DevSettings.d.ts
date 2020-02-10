/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import NativeEventEmitter from "../EventEmitter/NativeEventEmitter";
declare class DevSettings extends NativeEventEmitter {
    _menuItems: Map<string, (() => unknown)>;
    constructor();
    addMenuItem(title: string, handler: (() => unknown)): void;
    reload(reason: string): void;
    onFastRefresh(): void;
}
declare class NoopDevSettings {
    addMenuItem(title: string, handler: (() => unknown)): void;
    reload(): void;
}
declare const _default: DevSettings | NoopDevSettings;
export default _default;
