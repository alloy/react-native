yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Network/convertRequestBody.js
'use strict';












const binaryToBase64 = require('../Utilities/binaryToBase64');

const Blob = require('../Blob/Blob');
const FormData = require('./FormData');

export type RequestBody = string | Blob | FormData | {uri: string;} | ArrayBuffer | $ArrayBufferView;

function convertRequestBody(body: RequestBody): Object {
  if (typeof body === 'string') {
    return { string: body };
  }
  if (body instanceof Blob) {
    return { blob: body.data };
  }
  if (body instanceof FormData) {
    return { formData: body.getParts() };
  }
  if (body instanceof ArrayBuffer || ArrayBuffer.isView(body)) {
    // $FlowFixMe: no way to assert that 'body' is indeed an ArrayBufferView
    return { base64: binaryToBase64(body) };
  }
  return body;
}

module.exports = convertRequestBody;
Done in 0.50s.
