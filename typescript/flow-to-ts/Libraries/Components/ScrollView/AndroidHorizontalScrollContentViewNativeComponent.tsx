yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ScrollView/AndroidHorizontalScrollContentViewNativeComponent.js
'use strict';












const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');
const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

const AndroidHorizontalScrollContentViewViewConfig = {
  uiViewClassName: 'AndroidHorizontalScrollContentView',
  bubblingEventTypes: {},
  directEventTypes: {},
  validAttributes: {}
};

let AndroidHorizontalScrollContentViewNativeComponent;
if (global.RN$Bridgeless) {
  registerGeneratedViewConfig('AndroidHorizontalScrollContentView', AndroidHorizontalScrollContentViewViewConfig);
  AndroidHorizontalScrollContentViewNativeComponent = 'AndroidHorizontalScrollContentView';
} else {
  AndroidHorizontalScrollContentViewNativeComponent = requireNativeComponent<ViewProps>('AndroidHorizontalScrollContentView');
}

export default ((AndroidHorizontalScrollContentViewNativeComponent as any) as HostComponent<ViewProps>);
Done in 0.47s.
