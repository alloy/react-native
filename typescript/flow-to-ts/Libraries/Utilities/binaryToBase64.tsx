yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/binaryToBase64.js
'use strict';












const base64 = require('base64-js');

function binaryToBase64(data: ArrayBuffer | $ArrayBufferView): any {
  if (data instanceof ArrayBuffer) {
    data = new Uint8Array(data);
  }
  if (data instanceof Uint8Array) {
    return base64.fromByteArray(data);
  }
  if (!ArrayBuffer.isView(data)) {
    throw new Error('data must be ArrayBuffer or typed array');
  }
  const {
    buffer,
    byteOffset,
    byteLength
  } = data;
  return base64.fromByteArray(new Uint8Array(buffer, byteOffset, byteLength));
}

module.exports = binaryToBase64;
Done in 0.52s.
