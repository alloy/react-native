import Platform from '../../Utilities/Platform';
import React from 'react';
import View from '../View/View';
import RCTSafeAreaViewNativeComponent from './RCTSafeAreaViewNativeComponent';
import { $ReadOnly } from "utility-types";

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
  exported = React.forwardRef<Props, React.ElementRef<HostComponent<unknown>>>(function SafeAreaView(props, forwardedRef) {
    return <RCTSafeAreaViewNativeComponent emulateUnlessSupported={true} {...props} ref={forwardedRef} />;
  });
}

export default exported;;
