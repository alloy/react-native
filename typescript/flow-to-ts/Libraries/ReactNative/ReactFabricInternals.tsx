yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/ReactNative/ReactFabricInternals.js
'use strict';












const {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
} = require('../Renderer/shims/ReactFabric');
const createReactNativeComponentClass = require('../Renderer/shims/createReactNativeComponentClass');

import { NativeMethodsMixinType } from "../Renderer/shims/ReactNativeTypes";

const {
  NativeMethodsMixin
} = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

module.exports = {
  NativeMethodsMixin: ((NativeMethodsMixin as any) as $Exact<NativeMethodsMixinType>),
  createReactNativeComponentClass
};
Done in 0.49s.
