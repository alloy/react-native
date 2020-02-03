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