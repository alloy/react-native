import EmitterSubscription from "../vendor/emitter/EmitterSubscription";
declare type ExtraData = {
    [key: string]: string;
};
declare type SourceCallback = (() => string);
declare type DebugData = {
    extras: ExtraData;
    files: ExtraData;
};
/**
 * A simple class for collecting bug report data. Components can add sources that will be queried when a bug report
 * is created via `collectExtraData`. For example, a list component might add a source that provides the list of rows
 * that are currently visible on screen. Components should also remember to call `remove()` on the object that is
 * returned by `addSource` when they are unmounted.
 */
declare class BugReporting {
    static _extraSources: Map<string, SourceCallback>;
    static _fileSources: Map<string, SourceCallback>;
    static _subscription: EmitterSubscription | null | undefined;
    static _redboxSubscription: EmitterSubscription | null | undefined;
    static _maybeInit(): void;
    /**
     * Maps a string key to a simple callback that should return a string payload to be attached
     * to a bug report. Source callbacks are called when `collectExtraData` is called.
     *
     * Returns an object to remove the source when the component unmounts.
     *
     * Conflicts trample with a warning.
     */
    static addSource(key: string, callback: SourceCallback): {
        remove: (() => void);
    };
    /**
     * Maps a string key to a simple callback that should return a string payload to be attached
     * to a bug report. Source callbacks are called when `collectExtraData` is called.
     *
     * Returns an object to remove the source when the component unmounts.
     *
     * Conflicts trample with a warning.
     */
    static addFileSource(key: string, callback: SourceCallback): {
        remove: (() => void);
    };
    static _addSource(key: string, callback: SourceCallback, source: Map<string, SourceCallback>): {
        remove: (() => void);
    };
    /**
     * This can be called from a native bug reporting flow, or from JS code.
     *
     * If available, this will call `NativeModules.BugReporting.setExtraData(extraData)`
     * after collecting `extraData`.
     */
    static collectExtraData(): DebugData;
}
export default BugReporting;
