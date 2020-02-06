'use strict';;
import InteractionManager from './InteractionManager';
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

export default InteractionMixin;
