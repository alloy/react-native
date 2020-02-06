'use strict';;
import './Promise'; // make sure the default rejection handler is installed
const rejectionTracking = require('promise/setimmediate/rejection-tracking');

export default () => {
  rejectionTracking.enable({
    allRejections: true,
    onUnhandled: (id, error) => {
      console.error(error);
    },
    onHandled: () => {}
  });
};
