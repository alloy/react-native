yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/SafeAreaView/SafeAreaView.js
import { $ReadOnly } from "utility-types";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

const Platform = require('../../Utilities/Platform');
const React = require('react');
const View = require('../View/View');

import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

type Props = $ReadOnly<ViewProps & {
  emulateUnlessSupported?: boolean;
}>;

let exported: React.AbstractComponent<Props, React.ElementRef<HostComponent<unknown>>>;

/**
 * Renders nested content and automatically applies paddings reflect the portion
 * of the view that is not covered by navigation bars, tab bars, toolbars, and
 * other ancestor views.
 *
 * Moreover, and most importantly, Safe Area's paddings reflect physical
 * limitation of the screen, such as rounded corners or camera notches (aka
 * sensor housing area on iPhone X).
 */
if (Platform.OS === 'android') {
  exported = React.forwardRef<Props, React.ElementRef<HostComponent<unknown>>>(function SafeAreaView(props, forwardedRef) {
    const {
      emulateUnlessSupported,
      ...localProps
    } = props;
    return <View {...localProps} ref={forwardedRef} />;
  });
} else {
  const RCTSafeAreaViewNativeComponent = require('./RCTSafeAreaViewNativeComponent').default;

  exported = React.forwardRef<Props, React.ElementRef<HostComponent<unknown>>>(function SafeAreaView(props, forwardedRef) {
    return <RCTSafeAreaViewNativeComponent emulateUnlessSupported={true} {...props} ref={forwardedRef} />;
  });
}

module.exports = exported;
Done in 0.52s.
