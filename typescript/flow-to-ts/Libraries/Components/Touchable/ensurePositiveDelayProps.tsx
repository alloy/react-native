yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/Touchable/ensurePositiveDelayProps.js
'use strict';












const invariant = require('invariant');

const ensurePositiveDelayProps = function (props: any) {
  invariant(!(props.delayPressIn < 0 || props.delayPressOut < 0 || props.delayLongPress < 0), 'Touchable components cannot have negative delay properties');
};

module.exports = ensurePositiveDelayProps;
Done in 0.52s.
