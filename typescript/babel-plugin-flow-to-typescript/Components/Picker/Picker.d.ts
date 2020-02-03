declare const React: any;
import { ColorValue } from '../../StyleSheet/StyleSheetTypes';
declare type PickerItemProps = Readonly<{
    /**
     * Text to display for this item.
     */
    label: string;
    /**
     * The value to be passed to picker's `onValueChange` callback when
     * this item is selected. Can be a string or an integer.
     */
    value?: (number | string) | null;
    /**
     * Color of this item's text.
     * @platform android
     */
    color?: ColorValue;
    /**
     * Used to locate the item in end-to-end tests.
     */
    testID?: string;
}>;
/**
 * Individual selectable item in a Picker.
 */
export { PickerItem };
declare class PickerItem extends React.Component<PickerItemProps> {
    render(): void;
}
