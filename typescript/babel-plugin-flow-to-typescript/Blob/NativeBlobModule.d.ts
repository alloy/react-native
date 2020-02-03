import { TurboModule } from '../TurboModule/RCTExport';
export interface Spec extends TurboModule {
    readonly getConstants: () => {
        BLOB_URI_SCHEME: string | undefined | null;
        BLOB_URI_HOST: string | undefined | null;
    };
    readonly addNetworkingHandler: () => void;
    readonly addWebSocketHandler: (id: number) => void;
    readonly removeWebSocketHandler: (id: number) => void;
    readonly sendOverSocket: (blob: object, socketID: number) => void;
    readonly createFromParts: (parts: Array<object>, withId: string) => void;
    readonly release: (blobId: string) => void;
}
declare const _default: Spec;
export default _default;
