export declare type ViewToken = {
    item: any;
    key: string;
    index: number | undefined | null;
    isViewable: boolean;
    section?: any;
};
export declare type ViewabilityConfigCallbackPair = {
    viewabilityConfig: ViewabilityConfig;
    onViewableItemsChanged: (info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => void;
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
