import Blob from './Blob';
/**
 * To allow Blobs be accessed via `content://` URIs,
 * you need to register `BlobProvider` as a ContentProvider in your app's `AndroidManifest.xml`:
 *
 * ```xml
 * <manifest>
 *   <application>
 *     <provider
 *       android:name="com.facebook.react.modules.blob.BlobProvider"
 *       android:authorities="@string/blob_provider_authority"
 *       android:exported="false"
 *     />
 *   </application>
 * </manifest>
 * ```
 * And then define the `blob_provider_authority` string in `res/values/strings.xml`.
 * Use a dotted name that's entirely unique to your app:
 *
 * ```xml
 * <resources>
 *   <string name="blob_provider_authority">your.app.package.blobs</string>
 * </resources>
 * ```
 */
export declare class URLSearchParams {
    _searchParams: never[];
    constructor(params: any);
    append(key: string, value: string): void;
    delete(name: any): void;
    get(name: any): void;
    getAll(name: any): void;
    has(name: any): void;
    set(name: any, value: any): void;
    sort(): void;
    [Symbol.iterator](): IterableIterator<never>;
    toString(): string;
}
export declare class URL {
    _searchParamsInstance: null;
    static createObjectURL(blob: Blob): string;
    static revokeObjectURL(url: string): void;
    constructor(url: string, base: string);
    get hash(): void;
    get host(): void;
    get hostname(): void;
    get href(): string;
    get origin(): void;
    get password(): void;
    get pathname(): void;
    get port(): void;
    get protocol(): void;
    get search(): void;
    get searchParams(): URLSearchParams;
    toJSON(): string;
    toString(): string;
    get username(): void;
}
