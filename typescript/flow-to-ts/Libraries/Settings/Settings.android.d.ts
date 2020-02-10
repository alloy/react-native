declare const Settings: {
    get(key: string): unknown;
    set(settings: any): void;
    watchKeys(keys: string | string[], callback: (...args: any) => any): number;
    clearWatch(watchId: number): void;
};
export default Settings;
