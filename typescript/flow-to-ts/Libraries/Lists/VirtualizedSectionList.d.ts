import React from 'react';
import VirtualizedList from './VirtualizedList';
import { $PropertyType, $Diff } from "utility-types";
import { ViewToken } from "./ViewabilityHelper";
declare type Item = any;
export declare type SectionBase<SectionItemT> = {
    /**
     * The data for rendering items in this section.
     */
    data: ReadonlyArray<SectionItemT>;
    /**
     * Optional key to keep track of section re-ordering. If you don't plan on re-ordering sections,
     * the array index will be used by default.
     */
    key?: string;
    renderItem?: ((info: {
        item: SectionItemT;
        index: number;
        section: SectionBase<SectionItemT>;
        separators: {
            highlight: (() => void);
            unhighlight: (() => void);
            updateProps: ((select: "leading" | "trailing", newProps: any) => void);
        };
    }) => null | React.ReactElement<any>) | null | undefined;
    ItemSeparatorComponent?: React.ComponentType<any> | null | undefined;
    keyExtractor?: ((item: SectionItemT, index?: number | null | undefined) => string);
};
declare type RequiredProps<SectionT extends SectionBase<any>> = {
    sections: ReadonlyArray<SectionT>;
};
declare type OptionalProps<SectionT extends SectionBase<any>> = {
    /**
     * Default renderer for every item in every section.
     */
    renderItem?: ((info: {
        item: Item;
        index: number;
        section: SectionT;
        separators: {
            highlight: (() => void);
            unhighlight: (() => void);
            updateProps: ((select: "leading" | "trailing", newProps: any) => void);
        };
    }) => null | React.ReactElement<any>);
    /**
     * Rendered at the top of each section. These stick to the top of the `ScrollView` by default on
     * iOS. See `stickySectionHeadersEnabled`.
     */
    renderSectionHeader?: ((info: {
        section: SectionT;
    }) => null | React.ReactElement<any>) | null | undefined;
    /**
     * Rendered at the bottom of each section.
     */
    renderSectionFooter?: ((info: {
        section: SectionT;
    }) => null | React.ReactElement<any>) | null | undefined;
    /**
     * Rendered at the top and bottom of each section (note this is different from
     * `ItemSeparatorComponent` which is only rendered between items). These are intended to separate
     * sections from the headers above and below and typically have the same highlight response as
     * `ItemSeparatorComponent`. Also receives `highlighted`, `[leading/trailing][Item/Separator]`,
     * and any custom props from `separators.updateProps`.
     */
    SectionSeparatorComponent?: React.ComponentType<any> | null | undefined;
    /**
     * Makes section headers stick to the top of the screen until the next one pushes it off. Only
     * enabled by default on iOS because that is the platform standard there.
     */
    stickySectionHeadersEnabled?: boolean;
    onEndReached?: ((arg0: {
        distanceFromEnd: number;
    }) => void) | null | undefined;
};
declare type VirtualizedListProps = React.ElementProps<typeof VirtualizedList>;
export declare type Props<SectionT> = RequiredProps<SectionT> & OptionalProps<SectionT> & $Diff<VirtualizedListProps, {
    renderItem: $PropertyType<VirtualizedListProps, "renderItem">;
}>;
export declare type ScrollToLocationParamsType = {
    animated?: boolean | null | undefined;
    itemIndex: number;
    sectionIndex: number;
    viewOffset?: number;
    viewPosition?: number;
};
declare type DefaultProps = typeof VirtualizedList.defaultProps & {
    data: ReadonlyArray<Item>;
};
declare type State = {
    childProps: VirtualizedListProps;
};
/**
 * Right now this just flattens everything into one list and uses VirtualizedList under the
 * hood. The only operation that might not scale well is concatting the data arrays of all the
 * sections when new props are received, which should be plenty fast for up to ~10,000 items.
 */
declare class VirtualizedSectionList<SectionT extends SectionBase<any>> extends React.PureComponent<Props<SectionT>, State> {
    static defaultProps: DefaultProps;
    scrollToLocation(params: ScrollToLocationParamsType): void;
    getListRef(): VirtualizedList;
    constructor(props: Props<SectionT>, context: any);
    UNSAFE_componentWillReceiveProps(nextProps: Props<SectionT>): void;
    _computeState(props: Props<SectionT>): State;
    render(): React.ReactNode;
    _getItem: (props: Props<SectionT>, sections: readonly any[] | null | undefined, index: number) => any;
    _keyExtractor: (item: any, index: number) => string;
    _subExtractor(index: number): {
        section: SectionT;
        key: string;
        index: number | null | undefined;
        header?: boolean | null | undefined;
        leadingItem?: Item | null | undefined;
        leadingSection?: SectionT | null | undefined;
        trailingItem?: Item | null | undefined;
        trailingSection?: SectionT | null | undefined;
    } | null | undefined;
    _convertViewable: (viewable: ViewToken) => ViewToken | null | undefined;
    _onViewableItemsChanged: ({ viewableItems, changed }: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => void;
    _renderItem: ({ item, index }: {
        item: any;
        index: number;
    }) => JSX.Element | null;
    _onUpdateSeparator: (key: string, newProps: any) => void;
    _getSeparatorComponent(index: number, info?: any | null | undefined): React.ComponentType<any> | null | undefined;
    _cellRefs: {};
    _listRef: VirtualizedList;
    _captureRef: (ref: any) => void;
}
export default VirtualizedSectionList;
