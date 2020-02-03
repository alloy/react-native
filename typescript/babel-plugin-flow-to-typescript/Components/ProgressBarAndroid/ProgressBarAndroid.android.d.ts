import { ViewProps } from '../View/ViewPropTypes';
export declare type ProgressBarAndroidProps = Readonly<{
    /**
     * Whether to show the ProgressBar (true, the default) or hide it (false).
     */
    animating?: boolean | null;
    /**
     * Color of the progress bar.
     */
    color?: string | null;
    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string | null;
} & ViewProps & ({
    styleAttr: "Horizontal";
    indeterminate: false;
    progress: number;
} | {
    typeAttr: "Horizontal" | "Normal" | "Small" | "Large" | "Inverse" | "SmallInverse" | "LargeInverse";
    indeterminate: true;
})>;
