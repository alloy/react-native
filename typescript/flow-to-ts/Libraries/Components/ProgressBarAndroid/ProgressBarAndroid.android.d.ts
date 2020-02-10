import { $ReadOnly } from "utility-types";
import { ViewProps } from "../View/ViewPropTypes";
export declare type ProgressBarAndroidProps = $ReadOnly<ViewProps & ({
    styleAttr: "Horizontal";
    indeterminate: false;
    progress: number;
} | {
    typeAttr: "Horizontal" | "Normal" | "Small" | "Large" | "Inverse" | "SmallInverse" | "LargeInverse";
    indeterminate: true;
}) & {
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    animating?: boolean | null | undefined;
    /**
     * Color of the progress bar.
     */
    color?: string | null | undefined;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | null | undefined;
}>;
declare const _default: any;
export default _default;
