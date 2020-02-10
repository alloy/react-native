import { BlobData, BlobOptions } from "./BlobTypes";
/**
 * Opaque JS representation of some binary data in native.
 *
 * The API is modeled after the W3C Blob API, with one caveat
 * regarding explicit deallocation. Refer to the `close()`
 * method for further details.
 *
 * Example usage in a React component:
 *
 *   class WebSocketImage extends React.Component {
 *      state = {blob: null};
 *      componentDidMount() {
 *        let ws = this.ws = new WebSocket(...);
 *        ws.binaryType = 'blob';
 *        ws.onmessage = (event) => {
 *          if (this.state.blob) {
 *            this.state.blob.close();
 *          }
 *          this.setState({blob: event.data});
 *        };
 *      }
 *      componentUnmount() {
 *        if (this.state.blob) {
 *          this.state.blob.close();
 *        }
 *        this.ws.close();
 *      }
 *      render() {
 *        if (!this.state.blob) {
 *          return <View />;
 *        }
 *        return <Image source={{uri: URL.createObjectURL(this.state.blob)}} />;
 *      }
 *   }
 *
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Blob
 */
declare class Blob {
    _data: BlobData | null | undefined;
    /**
     * Constructor for JS consumers.
     * Currently we only support creating Blobs from other Blobs.
     * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
     */
    constructor(parts?: Array<Blob | string>, options?: BlobOptions);
    set data(data: BlobData | null | undefined);
    get data(): BlobData;
    slice(start?: number, end?: number): Blob;
    /**
     * This method is in the standard, but not actually implemented by
     * any browsers at this point. It's important for how Blobs work in
     * React Native, however, since we cannot de-allocate resources automatically,
     * so consumers need to explicitly de-allocate them.
     *
     * Note that the semantics around Blobs created via `blob.slice()`
     * and `new Blob([blob])` are different. `blob.slice()` creates a
     * new *view* onto the same binary data, so calling `close()` on any
     * of those views is enough to deallocate the data, whereas
     * `new Blob([blob, ...])` actually copies the data in memory.
     */
    close(): void;
    /**
     * Size of the data contained in the Blob object, in bytes.
     */
    get size(): number;
    get type(): string;
}
export default Blob;
