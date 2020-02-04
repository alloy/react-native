yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/promiseRejectionIsError.js
'use strict';












require('./Promise'); // make sure the default rejection handler is installed
const rejectionTracking = require('promise/setimmediate/rejection-tracking');

module.exports = () => {
  rejectionTracking.enable({
    allRejections: true,
    onUnhandled: (id, error) => {
      console.error(error);
    },
    onHandled: () => {}
  });
};
Done in 0.46s.
