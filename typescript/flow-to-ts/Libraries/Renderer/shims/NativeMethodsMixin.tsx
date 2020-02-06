'use strict';;
const {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
} = require('./ReactNative');

import { NativeMethodsMixinType } from "./ReactNativeTypes";

const {
  NativeMethodsMixin
} = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

export default (NativeMethodsMixin as any) as $Exact<NativeMethodsMixinType>;
