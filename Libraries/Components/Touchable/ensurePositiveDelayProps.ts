'use strict';












const invariant = require('invariant');

const ensurePositiveDelayProps = function (props: any) {
  invariant(!(props.delayPressIn < 0 || props.delayPressOut < 0 || props.delayLongPress < 0), 'Touchable components cannot have negative delay properties');
};

module.exports = ensurePositiveDelayProps;