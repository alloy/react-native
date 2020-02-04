yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ScrollView/ScrollViewNativeComponent.js
'use strict';












const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');
const requireNativeComponent = require('../../ReactNative/requireNativeComponent');
import ScrollViewViewConfig from "./ScrollViewViewConfig";

import { ScrollViewNativeProps, ScrollViewNativeComponentType } from "./ScrollViewNativeComponentType";

let ScrollViewNativeComponent;
if (global.RN$Bridgeless) {
  registerGeneratedViewConfig('RCTScrollView', ScrollViewViewConfig);
  ScrollViewNativeComponent = 'RCTScrollView';
} else {
  ScrollViewNativeComponent = requireNativeComponent<ScrollViewNativeProps>('RCTScrollView');
}

export default ((ScrollViewNativeComponent as any) as ScrollViewNativeComponentType);
Done in 0.47s.
