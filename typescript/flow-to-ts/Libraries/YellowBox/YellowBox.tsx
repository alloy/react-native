'use strict';;
import React from 'react';
import Platform from '../Utilities/Platform';
import RCTLog from '../Utilities/RCTLog';
import LogBox from '../LogBox/LogBox';
import YellowBoxRegistry from './Data/YellowBoxRegistry';
import { $ReadOnly, Class } from "utility-types";












import { Registry, IgnorePattern } from "./Data/YellowBoxRegistry";
import YellowBoxWarning from "./Data/YellowBoxWarning";

import * as LogBoxData from "../LogBox/Data/LogBoxData";
import NativeLogBox from "../NativeModules/specs/NativeLogBox";

type Props = $ReadOnly<{}>;
type State = {
  registry: Registry | null | undefined;
};

let YellowBox;

/**
 * YellowBox displays warnings at the bottom of the screen.
 *
 * Warnings help guard against subtle yet significant issues that can impact the
 * quality of the app. This "in your face" style of warning allows developers to
 * notice and correct these issues as quickly as possible.
 *
 * YellowBox is only enabled in `__DEV__`. Set the following flag to disable it:
 *
 *   console.disableYellowBox = true;
 *
 * Ignore specific warnings by calling:
 *
 *   YellowBox.ignoreWarnings(['Warning: ...']);
 *
 * Strings supplied to `YellowBox.ignoreWarnings` only need to be a substring of
 * the ignored warning messages.
 */
if (__DEV__) {
  const YellowBoxContainer = require('./YellowBoxContainer').default;
  const LogBoxNotificationContainer = require('../LogBox/LogBoxNotificationContainer').default;

  // YellowBox needs to insert itself early,
  // in order to access the component stacks appended by React DevTools.
  const {
    error,
    warn
  } = console;
  let errorImpl = error;
  let warnImpl = warn;
  let _isLogBoxEnabled = false;
  let _isInstalled = false;
  (console as any).error = function (...args) {
    errorImpl(...args);
  };
  (console as any).warn = function (...args) {
    warnImpl(...args);
  };

  // eslint-disable-next-line no-shadow
  YellowBox = class YellowBox extends React.Component<Props, State> {

    static ignoreWarnings(patterns: ReadonlyArray<IgnorePattern>): void {
      LogBoxData.addIgnorePatterns(patterns);
      YellowBoxRegistry.addIgnorePatterns(patterns);
    }

    static install(): void {
      if (_isLogBoxEnabled) {
        LogBox.install();
        return;
      }
      _isInstalled = true;

      errorImpl = function (...args) {
        registerError(...args);
      };

      warnImpl = function (...args) {
        registerWarning(...args);
      };

      if ((console as any).disableYellowBox === true) {
        YellowBoxRegistry.setDisabled(true);
      }
      (Object.defineProperty as any)(console, 'disableYellowBox', {
        configurable: true,
        get: () => YellowBoxRegistry.isDisabled(),
        set: value => YellowBoxRegistry.setDisabled(value)
      });

      if (Platform.isTesting) {
        (console as any).disableYellowBox = true;
      }

      RCTLog.setWarningHandler((...args) => {
        registerWarning(...args);
      });
    }

    static uninstall(): void {
      if (_isLogBoxEnabled) {
        LogBox.uninstall();
        return;
      }
      _isInstalled = false;
      errorImpl = error;
      warnImpl = warn;
      delete (console as any).disableYellowBox;
    }

    static __unstable_enableLogBox(): void {
      if (NativeLogBox == null) {
        // The native module is required to enable LogBox.
        return;
      }

      if (_isInstalled) {
        throw new Error('LogBox must be enabled before AppContainer is required so that it can properly wrap the console methods.\n\nPlease enable LogBox earlier in your app.\n\n');
      }
      _isLogBoxEnabled = true;

      // TODO: Temporary hack to prevent cycles with the ExceptionManager.
      global.__unstable_isLogBoxEnabled = true;
    }

    static __unstable_isLogBoxEnabled(): boolean {
      return !!_isLogBoxEnabled;
    }

    render(): React.ReactNode {
      if (_isLogBoxEnabled) {
        return <LogBoxNotificationContainer />;
      }

      // TODO: Ignore warnings that fire when rendering `YellowBox` itself.
      return <YellowBoxContainer />;
    }
  };

  const registerWarning = (...args): void => {
    if (typeof args[0] === 'string' && args[0].startsWith('(ADVICE)')) {
      return;
    }

    const {
      category,
      message,
      stack
    } = YellowBoxWarning.parse({
      args
    });

    if (!YellowBoxRegistry.isWarningIgnored(message)) {
      YellowBoxRegistry.add({ category, message, stack });
      warn.call(console, ...args);
    }
  };

  const registerError = (...args): void => {
    // Only show YellowBox for the `warning` module, otherwise pass through and skip.
    if (typeof args[0] !== 'string' || !args[0].startsWith('Warning: ')) {
      error.call(console, ...args);
      return;
    }

    const format = args[0].replace('Warning: ', '');
    const filterResult = LogBoxData.checkWarningFilter(format);
    if (filterResult.suppressCompletely) {
      return;
    }

    args[0] = filterResult.finalFormat;
    const {
      category,
      message,
      stack
    } = YellowBoxWarning.parse({
      args
    });

    if (YellowBoxRegistry.isWarningIgnored(message)) {
      return;
    }

    if (filterResult.forceDialogImmediately === true) {
      // This will pop a redbox. Do not downgrade. These are real bugs with same severity as throws.
      error.call(console, message.content);
    } else {
      // Unfortunately, we need to add the Warning: prefix back so we don't show a redbox later.
      args[0] = `Warning: ${filterResult.finalFormat}`;

      // Note: YellowBox has no concept of "soft errors" so we're showing YellowBox for those.
      YellowBoxRegistry.add({ category, message, stack });
      error.call(console, ...args);
    }
  };
} else {
  YellowBox = class extends React.Component<Props, State> {

    static ignoreWarnings(patterns: ReadonlyArray<IgnorePattern>): void {// Do nothing.
    }

    static install(): void {// Do nothing.
    }

    static uninstall(): void {// Do nothing.
    }

    static __unstable_enableLogBox(): void {// Do nothing.
    }
    static __unstable_isLogBoxEnabled(): boolean {
      return false;
    }

    render(): React.ReactNode {
      return null;
    }
  };
}

export default YellowBox as Class<React.Component<Props, State>> & {
  ignoreWarnings(arg0: ReadonlyArray<IgnorePattern>): void;
  install(): void;
  uninstall(): void;
  __unstable_enableLogBox(): void;
  __unstable_isLogBoxEnabled(): boolean;

};
