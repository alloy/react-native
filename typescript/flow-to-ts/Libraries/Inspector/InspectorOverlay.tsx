'use strict';;
import Dimensions from '../Utilities/Dimensions';
import ElementBox from './ElementBox';
import React from 'react';
import StyleSheet from '../StyleSheet/StyleSheet';
import ReactNative from '../Renderer/shims/ReactNative';
import UIManager from '../ReactNative/UIManager';
import View from '../Components/View/View';
import { $ReadOnly } from "utility-types";












import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { PressEvent } from "../Types/CoreEventTypes";

type Inspected = $ReadOnly<{
  frame?: any;
  style?: ViewStyleProp;
}>;

type Props = $ReadOnly<{
  isFabric: boolean;
  inspected?: Inspected;
  inspectedView?: React.ElementRef<HostComponent<unknown>> | null | undefined;
  onTouchViewTag: ((tag: number, frame: any, pointerY: number) => unknown);
}>;

class InspectorOverlay extends React.Component<Props> {

  findViewForTouchEvent: ((e: PressEvent) => void) = (e: PressEvent) => {
    const {
      locationX,
      locationY
    } = e.nativeEvent.touches[0];
    UIManager.findSubviewIn(ReactNative.findNodeHandle(this.props.inspectedView), [locationX, locationY], (nativeViewTag, left, top, width, height) => {
      this.props.onTouchViewTag(nativeViewTag, { left, top, width, height }, locationY);
    });
  };

  shouldSetResponser: ((e: PressEvent) => boolean) = (e: PressEvent): boolean => {
    this.findViewForTouchEvent(e);
    return true;
  };

  render(): React.ReactNode {
    let content = null;
    if (this.props.inspected) {
      content = <ElementBox frame={this.props.inspected.frame} style={this.props.inspected.style} />;
    }

    return <View onStartShouldSetResponder={this.shouldSetResponser} onResponderMove={this.findViewForTouchEvent} style={[styles.inspector, { height: Dimensions.get('window').height }]}>
        {content}
      </View>;
  }
}

const styles = StyleSheet.create({
  inspector: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0
  }
});

export default InspectorOverlay;;
