'use strict';;
import _Import0 from '../Renderer/shims/ReactFabric';

const {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
} = _Import0;

import createReactNativeComponentClass from '../Renderer/shims/createReactNativeComponentClass';

import { NativeMethodsMixinType } from "../Renderer/shims/ReactNativeTypes";

const {
  NativeMethodsMixin
} = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

export default {
  NativeMethodsMixin: ((NativeMethodsMixin as any) as $Exact<NativeMethodsMixinType>),
  createReactNativeComponentClass
};
