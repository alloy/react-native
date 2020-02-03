/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';

const registerGeneratedViewConfig = require('../../Utilities/registerGeneratedViewConfig');

const requireNativeComponent = require('../../ReactNative/requireNativeComponent');

import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
import { ViewProps } from '../View/ViewPropTypes';
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