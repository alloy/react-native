declare const Settings: {
    get(key: string): unknown;
    set(settings: Object): void;
    watchKeys(keys: string | string[], callback: Function): number;
    clearWatch(watchId: number): void;
};
