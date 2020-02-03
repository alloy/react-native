/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @polyfill
 * @nolint
 * @format
 */
/**
 * This pipes all of our console logging functions to native logging so that
 * JavaScript errors in required modules show up in Xcode via NSLog.
 */
declare const inspect: (obj: any, opts: any) => any;
declare const OBJECT_COLUMN_NAME = "(index)";
declare const LOG_LEVELS: {
    trace: number;
    info: number;
    warn: number;
    error: number;
};
declare const INSPECTOR_LEVELS: any[];
declare const INSPECTOR_FRAMES_TO_SKIP: number;
declare function getNativeLogFunction(level: any): () => void;
declare function repeat(element: any, n: any): any;
declare function consoleTablePolyfill(rows: any): void;
declare const GROUP_PAD = "\u2502";
declare const GROUP_OPEN = "\u2510";
declare const GROUP_CLOSE = "\u2518";
declare const groupStack: any[];
declare function groupFormat(prefix: any, msg: any): string;
declare function consoleGroupPolyfill(label: any): void;
declare function consoleGroupCollapsedPolyfill(label: any): void;
declare function consoleGroupEndPolyfill(): void;
declare function consoleAssertPolyfill(expression: any, label: any): void;
