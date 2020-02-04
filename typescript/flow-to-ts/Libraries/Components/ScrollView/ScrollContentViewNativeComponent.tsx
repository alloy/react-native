yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/ScrollView/ScrollContentViewNativeComponent.js
'use strict';












const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');
const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

const ScrollContentViewViewConfig = {
  uiViewClassName: 'RCTScrollContentView',
  bubblingEventTypes: {},
  directEventTypes: {},
  validAttributes: {}
};

let ScrollContentViewNativeComponent;
if (global.RN$Bridgeless) {
  registerGeneratedViewConfig('RCTScrollContentView', ScrollContentViewViewConfig);
  ScrollContentViewNativeComponent = 'RCTScrollContentView';
} else {
  ScrollContentViewNativeComponent = requireNativeComponent<ViewProps>('RCTScrollContentView');
}

export default ((ScrollContentViewNativeComponent as any) as HostComponent<ViewProps>);
Done in 0.54s.
