import Blob from './Blob';
import { BlobOptions } from "./BlobTypes";
/**
 * The File interface provides information about files.
 */
declare class File extends Blob {
    /**
     * Constructor for JS consumers.
     */
    constructor(parts: Array<Blob | string>, name: string, options?: BlobOptions);
    /**
     * Name of the file.
     */
    get name(): string;
    get lastModified(): number;
}
export default File;
