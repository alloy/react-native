import React from 'react';
import View from '../Components/View/View';
import VirtualizedList from './VirtualizedList';
import { $PropertyType, $Diff } from "utility-types";
import { ScrollResponderType } from "../Components/ScrollView/ScrollView";
import { ScrollViewNativeComponentType } from "../Components/ScrollView/ScrollViewNativeComponentType.js";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { ViewToken, ViewabilityConfigCallbackPair } from "./ViewabilityHelper";
import { RenderItemType, RenderItemProps } from "./VirtualizedList";
declare type RequiredProps<ItemT> = {
    /**
     * For simplicity, data is just a plain array. If you want to use something else, like an
     * immutable list, use the underlying `VirtualizedList` directly.
     */
    data: ReadonlyArray<ItemT> | null | undefined;
};
declare type OptionalProps<ItemT> = {
    /**
     * Takes an item from `data` and renders it into the list. Example usage:
     *
     *     <FlatList
     *       ItemSeparatorComponent={Platform.OS !== 'android' && ({highlighted}) => (
     *         <View style={[style.separator, highlighted && {marginLeft: 0}]} />
     *       )}
     *       data={[{title: 'Title Text', key: 'item1'}]}
     *       renderItem={({item, separators}) => (
     *         <TouchableHighlight
     *           onPress={() => this._onPress(item)}
     *           onShowUnderlay={separators.highlight}
     *           onHideUnderlay={separators.unhighlight}>
     *           <View style={{backgroundColor: 'white'}}>
     *             <Text>{item.title}</Text>
     *           </View>
     *         </TouchableHighlight>
     *       )}
     *     />
     *
     * Provides additional metadata like `index` if you need it, as well as a more generic
     * `separators.updateProps` function which let's you set whatever props you want to change the
     * rendering of either the leading separator or trailing separator in case the more common
     * `highlight` and `unhighlight` (which set the `highlighted: boolean` prop) are insufficient for
     * your use-case.
     */
    renderItem?: RenderItemType<ItemT> | null | undefined;
    /**
     * Optional custom style for multi-item rows generated when numColumns > 1.
     */
    columnWrapperStyle?: ViewStyleProp;
    /**
     * A marker property for telling the list to re-render (since it implements `PureComponent`). If
     * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
     * `data` prop, stick it here and treat it immutably.
     */
    extraData?: any;
    /**
     * `getItemLayout` is an optional optimizations that let us skip measurement of dynamic content if
     * you know the height of items a priori. `getItemLayout` is the most efficient, and is easy to
     * use if you have fixed height items, for example:
     *
     *     getItemLayout={(data, index) => (
     *       {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
     *     )}
     *
     * Adding `getItemLayout` can be a great performance boost for lists of several hundred items.
     * Remember to include separator length (height or width) in your offset calculation if you
     * specify `ItemSeparatorComponent`.
     */
    getItemLayout?: ((data: Array<ItemT> | null | undefined, index: number) => {
        length: number;
        offset: number;
        index: number;
    });
    /**
     * If true, renders items next to each other horizontally instead of stacked vertically.
     */
    horizontal?: boolean | null | undefined;
    /**
     * How many items to render in the initial batch. This should be enough to fill the screen but not
     * much more. Note these items will never be unmounted as part of the windowed rendering in order
     * to improve perceived performance of scroll-to-top actions.
     */
    initialNumToRender: number;
    /**
     * Instead of starting at the top with the first item, start at `initialScrollIndex`. This
     * disables the "scroll to top" optimization that keeps the first `initialNumToRender` items
     * always rendered and immediately renders the items starting at this initial index. Requires
     * `getItemLayout` to be implemented.
     */
    initialScrollIndex?: number | null | undefined;
    /**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted?: boolean | null | undefined;
    /**
     * Used to extract a unique key for a given item at the specified index. Key is used for caching
     * and as the react key to track item re-ordering. The default extractor checks `item.key`, then
     * falls back to using the index, like React does.
     */
    keyExtractor: ((item: ItemT, index: number) => string);
    /**
     * Multiple columns can only be rendered with `horizontal={false}` and will zig-zag like a
     * `flexWrap` layout. Items should all be the same height - masonry layouts are not supported.
     */
    numColumns: number;
    /**
     * See `ScrollView` for flow type and further documentation.
     */
    fadingEdgeLength?: number | null | undefined;
};
declare type FlatListProps<ItemT> = RequiredProps<ItemT> & OptionalProps<ItemT>;
declare type VirtualizedListProps = React.ElementConfig<typeof VirtualizedList>;
export declare type Props<ItemT> = $Diff<VirtualizedListProps, {
    getItem: $PropertyType<VirtualizedListProps, "getItem">;
    getItemCount: $PropertyType<VirtualizedListProps, "getItemCount">;
    getItemLayout: $PropertyType<VirtualizedListProps, "getItemLayout">;
    renderItem: $PropertyType<VirtualizedListProps, "renderItem">;
    keyExtractor: $PropertyType<VirtualizedListProps, "keyExtractor">;
}> & FlatListProps<ItemT>;
declare const defaultProps: {
    numColumns: number;
    /**
     * Enabling this prop on Android greatly improves scrolling performance with no known issues.
     * The alternative is that scrolling on Android is unusably bad. Enabling it on iOS has a few
     * known issues.
     */
    removeClippedSubviews: boolean;
    disableVirtualization: boolean;
    horizontal: boolean;
    initialNumToRender: number;
    keyExtractor: (item: any, index: number) => string;
    maxToRenderPerBatch: number;
    onEndReachedThreshold: number;
    scrollEventThrottle: number;
    updateCellsBatchingPeriod: number;
    windowSize: number;
};
export declare type DefaultProps = typeof defaultProps;
/**
 * A performant interface for rendering simple, flat lists, supporting the most handy features:
 *
 *  - Fully cross-platform.
 *  - Optional horizontal mode.
 *  - Configurable viewability callbacks.
 *  - Header support.
 *  - Footer support.
 *  - Separator support.
 *  - Pull to Refresh.
 *  - Scroll loading.
 *  - ScrollToIndex support.
 *
 * If you need section support, use [`<SectionList>`](docs/sectionlist.html).
 *
 * Minimal Example:
 *
 *     <FlatList
 *       data={[{key: 'a'}, {key: 'b'}]}
 *       renderItem={({item}) => <Text>{item.key}</Text>}
 *     />
 *
 * More complex, multi-select example demonstrating `PureComponent` usage for perf optimization and avoiding bugs.
 *
 * - By binding the `onPressItem` handler, the props will remain `===` and `PureComponent` will
 *   prevent wasteful re-renders unless the actual `id`, `selected`, or `title` props change, even
 *   if the components rendered in `MyListItem` did not have such optimizations.
 * - By passing `extraData={this.state}` to `FlatList` we make sure `FlatList` itself will re-render
 *   when the `state.selected` changes. Without setting this prop, `FlatList` would not know it
 *   needs to re-render any items because it is also a `PureComponent` and the prop comparison will
 *   not show any changes.
 * - `keyExtractor` tells the list to use the `id`s for the react keys instead of the default `key` property.
 *
 *
 *     class MyListItem extends React.PureComponent {
 *       _onPress = () => {
 *         this.props.onPressItem(this.props.id);
 *       };
 *
 *       render() {
 *         const textColor = this.props.selected ? "red" : "black";
 *         return (
 *           <TouchableOpacity onPress={this._onPress}>
 *             <View>
 *               <Text style={{ color: textColor }}>
 *                 {this.props.title}
 *               </Text>
 *             </View>
 *           </TouchableOpacity>
 *         );
 *       }
 *     }
 *
 *     class MultiSelectList extends React.PureComponent {
 *       state = {selected: (new Map(): Map<string, boolean>)};
 *
 *       _keyExtractor = (item, index) => item.id;
 *
 *       _onPressItem = (id: string) => {
 *         // updater functions are preferred for transactional updates
 *         this.setState((state) => {
 *           // copy the map rather than modifying state.
 *           const selected = new Map(state.selected);
 *           selected.set(id, !selected.get(id)); // toggle
 *           return {selected};
 *         });
 *       };
 *
 *       _renderItem = ({item}) => (
 *         <MyListItem
 *           id={item.id}
 *           onPressItem={this._onPressItem}
 *           selected={!!this.state.selected.get(item.id)}
 *           title={item.title}
 *         />
 *       );
 *
 *       render() {
 *         return (
 *           <FlatList
 *             data={this.props.data}
 *             extraData={this.state}
 *             keyExtractor={this._keyExtractor}
 *             renderItem={this._renderItem}
 *           />
 *         );
 *       }
 *     }
 *
 * This is a convenience wrapper around [`<VirtualizedList>`](docs/virtualizedlist.html),
 * and thus inherits its props (as well as those of `ScrollView`) that aren't explicitly listed
 * here, along with the following caveats:
 *
 * - Internal state is not preserved when content scrolls out of the render window. Make sure all
 *   your data is captured in the item data or external stores like Flux, Redux, or Relay.
 * - This is a `PureComponent` which means that it will not re-render if `props` remain shallow-
 *   equal. Make sure that everything your `renderItem` function depends on is passed as a prop
 *   (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on
 *   changes. This includes the `data` prop and parent component state.
 * - In order to constrain memory and enable smooth scrolling, content is rendered asynchronously
 *   offscreen. This means it's possible to scroll faster than the fill rate ands momentarily see
 *   blank content. This is a tradeoff that can be adjusted to suit the needs of each application,
 *   and we are working on improving it behind the scenes.
 * - By default, the list looks for a `key` prop on each item and uses that for the React key.
 *   Alternatively, you can provide a custom `keyExtractor` prop.
 *
 * Also inherits [ScrollView Props](docs/scrollview.html#props), unless it is nested in another FlatList of same orientation.
 */
declare class FlatList<ItemT> extends React.PureComponent<Props<ItemT>, void> {
    static defaultProps: DefaultProps;
    props: Props<ItemT>;
    /**
     * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
     */
    scrollToEnd(params?: {
        animated?: boolean | null | undefined;
    } | null | undefined): void;
    /**
     * Scrolls to the item at the specified index such that it is positioned in the viewable area
     * such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the
     * middle. `viewOffset` is a fixed number of pixels to offset the final target position.
     *
     * Note: cannot scroll to locations outside the render window without specifying the
     * `getItemLayout` prop.
     */
    scrollToIndex(params: {
        animated?: boolean | null | undefined;
        index: number;
        viewOffset?: number;
        viewPosition?: number;
    }): void;
    /**
     * Requires linear scan through data - use `scrollToIndex` instead if possible.
     *
     * Note: cannot scroll to locations outside the render window without specifying the
     * `getItemLayout` prop.
     */
    scrollToItem(params: {
        animated?: boolean | null | undefined;
        item: ItemT;
        viewPosition?: number;
    }): void;
    /**
     * Scroll to a specific content pixel offset in the list.
     *
     * Check out [scrollToOffset](docs/virtualizedlist.html#scrolltooffset) of VirtualizedList
     */
    scrollToOffset(params: {
        animated?: boolean | null | undefined;
        offset: number;
    }): void;
    /**
     * Tells the list an interaction has occurred, which should trigger viewability calculations, e.g.
     * if `waitForInteractions` is true and the user has not scrolled. This is typically called by
     * taps on items or by navigation actions.
     */
    recordInteraction(): void;
    /**
     * Displays the scroll indicators momentarily.
     *
     * @platform ios
     */
    flashScrollIndicators(): void;
    /**
     * Provides a handle to the underlying scroll responder.
     */
    getScrollResponder(): ScrollResponderType | null | undefined;
    /**
     * Provides a reference to the underlying host component
     */
    getNativeScrollRef(): (React.ElementRef<typeof View> | null | undefined) | (React.ElementRef<ScrollViewNativeComponentType> | null | undefined);
    getScrollableNode(): any;
    setNativeProps(props: {
        [key: string]: unknown;
    }): void;
    constructor(props: Props<ItemT>);
    componentDidUpdate(prevProps: Props<ItemT>): void;
    _listRef: React.ElementRef<typeof VirtualizedList> | null | undefined;
    _virtualizedListPairs: Array<ViewabilityConfigCallbackPair>;
    _captureRef: (ref: any) => void;
    _checkProps(props: Props<ItemT>): void;
    _getItem: (data: ItemT[], index: number) => never[] | ItemT;
    _getItemCount: (data: ItemT[] | null | undefined) => number;
    _keyExtractor: (items: ItemT | ItemT[], index: number) => any;
    _pushMultiColumnViewable(arr: Array<ViewToken>, v: ViewToken): void;
    _createOnViewableItemsChanged(onViewableItemsChanged: ((info: {
        viewableItems: Array<ViewToken>;
        changed: Array<ViewToken>;
    }) => void) | null | undefined): (info: {
        viewableItems: ViewToken[];
        changed: ViewToken[];
    }) => void;
    _renderer: () => {
        [x: string]: (info: RenderItemProps<ItemT>) => {} | null | undefined;
    };
    render(): React.ReactNode;
}
export default FlatList;
