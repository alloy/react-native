import ExceptionsManager from '../../Core/ExceptionsManager';
import { $ReadOnly } from "utility-types";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import * as React from "react";
import LogBoxLog from "./LogBoxLog";
import { parseLogBoxException } from "./parseLogBoxLog";
import { LogLevel } from "./LogBoxLog";
import { Message, Category, ComponentStack, ExtendedExceptionData } from "./parseLogBoxLog";
import parseErrorStack from "../../Core/Devtools/parseErrorStack";
import { ExtendedError } from "../../Core/Devtools/parseErrorStack";
import NativeLogBox from "../../NativeModules/specs/NativeLogBox";
export type LogBoxLogs = Set<LogBoxLog>;
export type LogData = $ReadOnly<{
  level: LogLevel;
  message: Message;
  category: Category;
  componentStack: ComponentStack;
}>;

export type Observer = ((arg0: $ReadOnly<{
  logs: LogBoxLogs;
  isDisabled: boolean;
  selectedLogIndex: number;
}>) => void);

export type IgnorePattern = string | RegExp;

export type Subscription = $ReadOnly<{
  unsubscribe: (() => void);
}>;

export type WarningInfo = {
  finalFormat: string;
  forceDialogImmediately: boolean;
  suppressDialog_LEGACY: boolean;
  suppressCompletely: boolean;
  monitorEvent: string | null;
  monitorListVersion: number;
  monitorSampleRate: number;
};

export type WarningFilter = ((format: string) => WarningInfo);

type AppInfo = $ReadOnly<{
  appVersion: string;
  engine: string;
  onPress?: (() => void) | null | undefined;
}>;

const observers: Set<{observer: Observer;}> = new Set();
const ignorePatterns: Set<IgnorePattern> = new Set();
let appInfo: (() => AppInfo) | null | undefined = null;
let logs: LogBoxLogs = new Set();
let updateTimeout = null;
let _isDisabled = false;
let _selectedIndex = -1;

let warningFilter: WarningFilter = function (format) {
  return {
    finalFormat: format,
    forceDialogImmediately: false,
    suppressDialog_LEGACY: true,
    suppressCompletely: false,
    monitorEvent: 'unknown',
    monitorListVersion: 0,
    monitorSampleRate: 1
  };
};

const LOGBOX_ERROR_MESSAGE = 'An error was thrown when attempting to render log messages via LogBox.';

function getNextState() {
  return {
    logs,
    isDisabled: _isDisabled,
    selectedLogIndex: _selectedIndex
  };
}

export function reportLogBoxError(error: ExtendedError, componentStack?: string): void {}

export function isLogBoxErrorMessage(message: string): boolean {
  return null as any;
}

export function isMessageIgnored(message: string): boolean {
  return null as any;
}

function handleUpdate(): void {}

function appendNewLog(newLog) {
  // We don't want to store these logs because they trigger a
  // state update whenever we add them to the store, which is
  // expensive to noisy logs. If we later want to display these
  // we will store them in a different state object.
  if (isMessageIgnored(newLog.message.content)) {
    return;
  }

  // If the next log has the same category as the previous one
  // then we want to roll it up into the last log in the list
  // by incrementing the count (simar to how Chrome does it).
  const lastLog = Array.from(logs).pop();
  if (lastLog && lastLog.category === newLog.category) {
    lastLog.incrementCount();
    handleUpdate();
    return;
  }

  if (newLog.level === 'fatal') {
    // If possible, to avoid jank, we don't want to open the error before
    // it's symbolicated. To do that, we optimistically wait for
    // sybolication for up to a second before adding the log.
    const OPTIMISTIC_WAIT_TIME = 1000;

    let addPendingLog = () => {
      logs.add(newLog);
      if (_selectedIndex <= 0) {
        setSelectedLog(logs.size - 1);
      } else {
        handleUpdate();
      }
      addPendingLog = null;
    };

    const optimisticTimeout = setTimeout(() => {
      if (addPendingLog) {
        addPendingLog();
      }
    }, OPTIMISTIC_WAIT_TIME);

    newLog.symbolicate(status => {
      if (addPendingLog && status !== 'PENDING') {
        addPendingLog();
        clearTimeout(optimisticTimeout);
      } else if (status !== 'PENDING') {
        // The log has already been added but we need to trigger a render.
        handleUpdate();
      }
    });
  } else if (newLog.level === 'syntax') {
    logs.add(newLog);
    setSelectedLog(logs.size - 1);
  } else {
    logs.add(newLog);
    handleUpdate();
  }
}

export function addLog(log: LogData): void {}

export function addException(error: ExtendedExceptionData): void {}

export function symbolicateLogNow(log: LogBoxLog) {
  log.symbolicate(() => {
    handleUpdate();
  });
}

export function retrySymbolicateLogNow(log: LogBoxLog) {
  log.retrySymbolicate(() => {
    handleUpdate();
  });
}

export function symbolicateLogLazy(log: LogBoxLog) {
  log.symbolicate();
}

export function clear(): void {}

export function setSelectedLog(proposedNewIndex: number): void {}

export function clearWarnings(): void {}

export function clearErrors(): void {}

export function dismiss(log: LogBoxLog): void {}

export function setWarningFilter(filter: WarningFilter): void {}

export function setAppInfo(info: (() => AppInfo)): void {}

export function getAppInfo(): AppInfo | null | undefined {
  return null as any;
}

export function checkWarningFilter(format: string): WarningInfo {
  return null as any;
}

export function addIgnorePatterns(patterns: ReadonlyArray<IgnorePattern>): void {}

export function setDisabled(value: boolean): void {}

export function isDisabled(): boolean {
  return null as any;
}

export function observe(observer: Observer): Subscription {
  return null as any;
}

type Props = $ReadOnly<{}>;
type State = $ReadOnly<{
  logs: LogBoxLogs;
  isDisabled: boolean;
  hasError: boolean;
  selectedLogIndex: number;
}>;

type SubscribedComponent = React.AbstractComponent<$ReadOnly<{
  logs: ReadonlyArray<LogBoxLog>;
  isDisabled: boolean;
  selectedLogIndex: number;
}>>;

export function withSubscription(WrappedComponent: SubscribedComponent): React.AbstractComponent<{}> {
  return null as any;
}
