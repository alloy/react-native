declare const Settings: {
    _settings: any;
    get(key: string): unknown;
    set(settings: any): void;
    watchKeys(keys: string | string[], callback: (...args: any) => any): number;
    clearWatch(watchId: number): void;
    _sendObservations(body: any): void;
};
export default Settings;
