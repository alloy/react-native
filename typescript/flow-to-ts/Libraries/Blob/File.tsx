yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Blob/File.js
'use strict';












const Blob = require('./Blob');

const invariant = require('invariant');

import { BlobOptions } from "./BlobTypes";

/**
 * The File interface provides information about files.
 */
class File extends Blob {
  /**
   * Constructor for JS consumers.
   */
  constructor(parts: Array<Blob | string>, name: string, options?: BlobOptions) {
    invariant(parts != null && name != null, 'Failed to construct `File`: Must pass both `parts` and `name` arguments.');

    super(parts, options);
    this.data.name = name;
  }

  /**
   * Name of the file.
   */
  get name(): string {
    invariant(this.data.name != null, 'Files must have a name set.');
    return this.data.name;
  }

  /*
   * Last modified time of the file.
   */
  get lastModified(): number {
    return this.data.lastModified || 0;
  }
}

module.exports = File;
Done in 0.52s.
