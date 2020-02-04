yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Interaction/InteractionMixin.js
'use strict';












const InteractionManager = require('./InteractionManager');
import { Handle } from "./InteractionManager";

/**
 * This mixin provides safe versions of InteractionManager start/end methods
 * that ensures `clearInteractionHandle` is always called
 * once per start, even if the component is unmounted.
 */
const InteractionMixin = {
  componentWillUnmount: function () {
    while (this._interactionMixinHandles.length) {
      InteractionManager.clearInteractionHandle(this._interactionMixinHandles.pop());
    }
  },

  _interactionMixinHandles: ([] as Array<number>),

  createInteractionHandle: function (): Handle {
    const handle = InteractionManager.createInteractionHandle();
    this._interactionMixinHandles.push(handle);
    return handle;
  },

  clearInteractionHandle: function (clearHandle: number): void {
    InteractionManager.clearInteractionHandle(clearHandle);
    this._interactionMixinHandles = this._interactionMixinHandles.filter(handle => handle !== clearHandle);
  },

  /**
   * Schedule work for after all interactions have completed.
   *
   * @param {function} callback
   */
  runAfterInteractions: function (callback: Function): void {
    InteractionManager.runAfterInteractions(callback);
  }
};

module.exports = InteractionMixin;
Done in 0.49s.
