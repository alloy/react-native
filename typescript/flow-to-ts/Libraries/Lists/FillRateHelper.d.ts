export declare type FillRateInfo = Info;
declare class Info {
    any_blank_count: number;
    any_blank_ms: number;
    any_blank_speed_sum: number;
    mostly_blank_count: number;
    mostly_blank_ms: number;
    pixels_blank: number;
    pixels_sampled: number;
    pixels_scrolled: number;
    total_time_spent: number;
    sample_count: number;
}
declare type FrameMetrics = {
    inLayout?: boolean;
    length: number;
    offset: number;
};
/**
 * A helper class for detecting when the maximem fill rate of `VirtualizedList` is exceeded.
 * By default the sampling rate is set to zero and this will do nothing. If you want to collect
 * samples (e.g. to log them), make sure to call `FillRateHelper.setSampleRate(0.0-1.0)`.
 *
 * Listeners and sample rate are global for all `VirtualizedList`s - typical usage will combine with
 * `SceneTracker.getActiveScene` to determine the context of the events.
 */
declare class FillRateHelper {
    _anyBlankStartTime: number | null | undefined;
    _enabled: boolean;
    _getFrameMetrics: ((index: number) => FrameMetrics | null | undefined);
    _info: Info;
    _mostlyBlankStartTime: number | null | undefined;
    _samplesStartTime: number | null | undefined;
    static addListener(callback: ((arg0: FillRateInfo) => void)): {
        remove: (() => void);
    };
    static setSampleRate(sampleRate: number): void;
    static setMinSampleCount(minSampleCount: number): void;
    constructor(getFrameMetrics: ((index: number) => FrameMetrics | null | undefined));
    activate(): void;
    deactivateAndFlush(): void;
    computeBlankness(props: {
        data: any;
        getItemCount: ((data: any) => number);
        initialNumToRender: number;
    }, state: {
        first: number;
        last: number;
    }, scrollMetrics: {
        dOffset: number;
        offset: number;
        velocity: number;
        visibleLength: number;
    }): number;
    enabled(): boolean;
    _resetData(): void;
}
export default FillRateHelper;
