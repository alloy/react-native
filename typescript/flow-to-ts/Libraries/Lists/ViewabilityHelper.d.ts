export declare type ViewToken = {
    item: any;
    key: string;
    index: number | null | undefined;
    isViewable: boolean;
    section?: any;
};
export declare type ViewabilityConfigCallbackPair = {
    viewabilityConfig: ViewabilityConfig;
    onViewableItemsChanged: ((info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => void);
};
export declare type ViewabilityConfig = {
    /**
     * Minimum amount of time (in milliseconds) that an item must be physically viewable before the
     * viewability callback will be fired. A high number means that scrolling through content without
     * stopping will not mark the content as viewable.
     */
    minimumViewTime?: number;
    /**
     * Percent of viewport that must be covered for a partially occluded item to count as
     * "viewable", 0-100. Fully visible items are always considered viewable. A value of 0 means
     * that a single pixel in the viewport makes the item viewable, and a value of 100 means that
     * an item must be either entirely visible or cover the entire viewport to count as viewable.
     */
    viewAreaCoveragePercentThreshold?: number;
    /**
     * Similar to `viewAreaPercentThreshold`, but considers the percent of the item that is visible,
     * rather than the fraction of the viewable area it covers.
     */
    itemVisiblePercentThreshold?: number;
    /**
     * Nothing is considered viewable until the user scrolls or `recordInteraction` is called after
     * render.
     */
    waitForInteraction?: boolean;
};
/**
 * A Utility class for calculating viewable items based on current metrics like scroll position and
 * layout.
 *
 * An item is said to be in a "viewable" state when any of the following
 * is true for longer than `minimumViewTime` milliseconds (after an interaction if `waitForInteraction`
 * is true):
 *
 * - Occupying >= `viewAreaCoveragePercentThreshold` of the view area XOR fraction of the item
 *   visible in the view area >= `itemVisiblePercentThreshold`.
 * - Entirely visible on screen
 */
declare class ViewabilityHelper {
    _config: ViewabilityConfig;
    _hasInteracted: boolean;
    _timers: Set<number>;
    _viewableIndices: Array<number>;
    _viewableItems: Map<string, ViewToken>;
    constructor(config?: ViewabilityConfig);
    /**
     * Cleanup, e.g. on unmount. Clears any pending timers.
     */
    dispose(): void;
    /**
     * Determines which items are viewable based on the current metrics and config.
     */
    computeViewableItems(itemCount: number, scrollOffset: number, viewportHeight: number, getFrameMetrics: ((index: number) => {
        length: number;
        offset: number;
    } | null | undefined), // Optional optimization to reduce the scan size
    renderRange?: {
        first: number;
        last: number;
    }): Array<number>;
    /**
     * Figures out which items are viewable and how that has changed from before and calls
     * `onViewableItemsChanged` as appropriate.
     */
    onUpdate(itemCount: number, scrollOffset: number, viewportHeight: number, getFrameMetrics: ((index: number) => {
        length: number;
        offset: number;
    } | null | undefined), createViewToken: ((index: number, isViewable: boolean) => ViewToken), onViewableItemsChanged: ((arg0: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => void), // Optional optimization to reduce the scan size
    renderRange?: {
        first: number;
        last: number;
    }): void;
    /**
     * clean-up cached _viewableIndices to evaluate changed items on next update
     */
    resetViewableIndices(): void;
    /**
     * Records that an interaction has happened even if there has been no scroll.
     */
    recordInteraction(): void;
    _onUpdateSync(viewableIndicesToCheck: any, onViewableItemsChanged: any, createViewToken: any): void;
}
export default ViewabilityHelper;
