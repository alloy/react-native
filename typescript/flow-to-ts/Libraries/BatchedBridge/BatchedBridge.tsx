yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/BatchedBridge/BatchedBridge.js
'use strict';












const MessageQueue = require('./MessageQueue');

const BatchedBridge: MessageQueue = new MessageQueue();

// Wire up the batched bridge on the global object so that we can call into it.
// Ideally, this would be the inverse relationship. I.e. the native environment
// provides this global directly with its script embedded. Then this module
// would export it. A possible fix would be to trim the dependencies in
// MessageQueue to its minimal features and embed that in the native runtime.

Object.defineProperty(global, '__fbBatchedBridge', {
  configurable: true,
  value: BatchedBridge
});

module.exports = BatchedBridge;
Done in 0.47s.
