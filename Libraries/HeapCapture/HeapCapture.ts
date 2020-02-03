'use strict';












import NativeJSCHeapCapture from "./NativeJSCHeapCapture";

const HeapCapture = {
  captureHeap: function (path: string) {
    let error = null;
    try {
      global.nativeCaptureHeap(path);
      console.log('HeapCapture.captureHeap succeeded: ' + path);
    } catch (e) {
      console.log('HeapCapture.captureHeap error: ' + e.toString());
      error = e.toString();
    }
    if (NativeJSCHeapCapture) {
      NativeJSCHeapCapture.captureComplete(path, error);
    }
  }
};

module.exports = HeapCapture;