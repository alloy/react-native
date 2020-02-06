'use strict';;
import invariant from 'invariant';

const ensurePositiveDelayProps = function (props: any) {
  invariant(!(props.delayPressIn < 0 || props.delayPressOut < 0 || props.delayLongPress < 0), 'Touchable components cannot have negative delay properties');
};

export default ensurePositiveDelayProps;
