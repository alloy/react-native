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
