'use strict';;
import React from 'react';
import TextAncestor from '../../Text/TextAncestor';
import { ViewProps } from "./ViewPropTypes";

import ViewNativeComponent from "./ViewNativeComponent";

export type Props = ViewProps;

/**
 * The most fundamental component for building a UI, View is a container that
 * supports layout with flexbox, style, some touch handling, and accessibility
 * controls.
 *
 * @see http://facebook.github.io/react-native/docs/view.html
 */
const View: React.AbstractComponent<ViewProps, React.ElementRef<typeof ViewNativeComponent>> = React.forwardRef((props: ViewProps, forwardedRef) => {
  return <TextAncestor.Provider value={false}>
      <ViewNativeComponent {...props} ref={forwardedRef} />
    </TextAncestor.Provider>;
});

View.displayName = 'View';

export default View;
