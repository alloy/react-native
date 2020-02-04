'use strict';












/**
 * Sets up global variables for React Native.
 * You can use this module directly, or just require InitializeCore.
 */
if (global.GLOBAL === undefined) {
  global.GLOBAL = global;
}

if (global.window === undefined) {
  global.window = global;
}

if (global.self === undefined) {
  global.self = global;
}

// Set up process
global.process = global.process || {};
global.process.env = global.process.env || {};
if (!global.process.env.NODE_ENV) {
  global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';
}
