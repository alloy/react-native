yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/YellowBox/Data/YellowBoxRegistry.js
'use strict';
import { $ReadOnly } from "utility-types";












const YellowBoxWarning = require('./YellowBoxWarning');

import { Category, Message } from "./YellowBoxCategory";
import { Stack } from "./YellowBoxSymbolication";
export type Registry = Map<Category, ReadonlyArray<YellowBoxWarning>>;

export type Observer = (registry: Registry) => void;

export type IgnorePattern = string | RegExp;

export type Subscription = $ReadOnly<{
  unsubscribe: () => void;
}>;

const observers: Set<{observer: Observer;}> = new Set();
const ignorePatterns: Set<IgnorePattern> = new Set();
const registry: Registry = new Map();

let disabled = false;
let projection = new Map();
let updateTimeout = null;

function handleUpdate(): void {
  projection = new Map();
  if (!disabled) {
    for (const [category, warnings] of registry) {
      const filtered = warnings.filter(warning => !YellowBoxRegistry.isWarningIgnored(warning.message));
      if (filtered.length > 0) {
        projection.set(category, filtered);
      }
    }
  }
  if (updateTimeout == null) {
    updateTimeout = setImmediate(() => {
      updateTimeout = null;
      for (const {
        observer
      } of observers) {
        observer(projection);
      }
    });
  }
}

const YellowBoxRegistry = {
  isWarningIgnored(message: Message): boolean {
    for (const pattern of ignorePatterns) {
      if (pattern instanceof RegExp && pattern.test(message.content)) {
        return true;
      } else if (typeof pattern === 'string' && message.content.includes(pattern)) {
        return true;
      }
    }
    return false;
  },
  add({
    category,
    message,
    stack
  }: $ReadOnly<{
    category: Category;
    message: Message;
    stack: Stack;
  }>): void {
    let warnings = registry.get(category);
    if (warnings == null) {
      warnings = [];
    }
    warnings = [...warnings, new YellowBoxWarning(message, stack)];

    registry.delete(category);
    registry.set(category, warnings);

    handleUpdate();
  },

  delete(category: Category): void {
    if (registry.has(category)) {
      registry.delete(category);
      handleUpdate();
    }
  },

  clear(): void {
    if (registry.size > 0) {
      registry.clear();
      handleUpdate();
    }
  },

  addIgnorePatterns(patterns: ReadonlyArray<IgnorePattern>): void {
    const newPatterns = patterns.filter((pattern: IgnorePattern) => {
      if (pattern instanceof RegExp) {
        for (const existingPattern of ignorePatterns.entries()) {
          if (existingPattern instanceof RegExp && existingPattern.toString() === pattern.toString()) {
            return false;
          }
        }
        return true;
      }
      return !ignorePatterns.has(pattern);
    });
    if (newPatterns.length === 0) {
      return;
    }
    for (const pattern of newPatterns) {
      ignorePatterns.add(pattern);
    }
    handleUpdate();
  },

  setDisabled(value: boolean): void {
    if (value === disabled) {
      return;
    }
    disabled = value;
    handleUpdate();
  },

  isDisabled(): boolean {
    return disabled;
  },

  observe(observer: Observer): Subscription {
    const subscription = { observer };
    observers.add(subscription);
    observer(projection);
    return {
      unsubscribe(): void {
        observers.delete(subscription);
      }
    };
  }
};

module.exports = YellowBoxRegistry;
Done in 0.51s.
