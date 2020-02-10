import React from 'react';
import { ViewProps } from "./ViewPropTypes";
import ViewNativeComponent from "./ViewNativeComponent";
export declare type Props = ViewProps;
/**
 * The most fundamental component for building a UI, View is a container that
 * supports layout with flexbox, style, some touch handling, and accessibility
 * controls.
 *
 * @see http://facebook.github.io/react-native/docs/view.html
 */
declare const View: React.AbstractComponent<ViewProps, React.ElementRef<typeof ViewNativeComponent>>;
export default View;
