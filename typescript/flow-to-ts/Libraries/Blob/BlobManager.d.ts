import Blob from './Blob';
import { BlobData, BlobOptions } from "./BlobTypes";
/**
 * Module to manage blobs. Wrapper around the native blob module.
 */
declare class BlobManager {
    /**
     * If the native blob module is available.
     */
    static isAvailable: boolean;
    /**
     * Create blob from existing array of blobs.
     */
    static createFromParts(parts: Array<Blob | string>, options?: BlobOptions): Blob;
    /**
     * Create blob instance from blob data from native.
     * Used internally by modules like XHR, WebSocket, etc.
     */
    static createFromOptions(options: BlobData): Blob;
    /**
     * Deallocate resources for a blob.
     */
    static release(blobId: string): void;
    /**
     * Inject the blob content handler in the networking module to support blob
     * requests and responses.
     */
    static addNetworkingHandler(): void;
    /**
     * Indicate the websocket should return a blob for incoming binary
     * messages.
     */
    static addWebSocketHandler(socketId: number): void;
    /**
     * Indicate the websocket should no longer return a blob for incoming
     * binary messages.
     */
    static removeWebSocketHandler(socketId: number): void;
    /**
     * Send a blob message to a websocket.
     */
    static sendOverSocket(blob: Blob, socketId: number): void;
}
export default BlobManager;
