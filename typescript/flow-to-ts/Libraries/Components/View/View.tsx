yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/View/View.js
'use strict';












import { ViewProps } from "./ViewPropTypes";

const React = require('react');
import ViewNativeComponent from "./ViewNativeComponent";
const TextAncestor = require('../../Text/TextAncestor');

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

module.exports = View;
Done in 0.53s.
