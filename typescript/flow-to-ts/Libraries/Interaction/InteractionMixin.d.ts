/**
 * This mixin provides safe versions of InteractionManager start/end methods
 * that ensures `clearInteractionHandle` is always called
 * once per start, even if the component is unmounted.
 */
declare const InteractionMixin: {
    componentWillUnmount: () => void;
    _interactionMixinHandles: number[];
    createInteractionHandle: () => number;
    clearInteractionHandle: (clearHandle: number) => void;
    /**
     * Schedule work for after all interactions have completed.
     *
     * @param {function} callback
     */
    runAfterInteractions: (callback: (...args: any) => any) => void;
};
export default InteractionMixin;
