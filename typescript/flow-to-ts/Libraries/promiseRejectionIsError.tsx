'use strict';;
import rejectionTracking from 'promise/setimmediate/rejection-tracking';
import './Promise'; // make sure the default rejection handler is installed

export default () => {
  rejectionTracking.enable({
    allRejections: true,
    onUnhandled: (id, error) => {
      console.error(error);
    },
    onHandled: () => {}
  });
};
