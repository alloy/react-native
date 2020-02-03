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

const Dimensions = require('../Utilities/Dimensions');

const ElementBox = require('./ElementBox');

const React = require('react');

const StyleSheet = require('../StyleSheet/StyleSheet');

const ReactNative = require('../Renderer/shims/ReactNative');

const UIManager = require('../ReactNative/UIManager');

const View = require('../Components/View/View');

import { HostComponent } from '../Renderer/shims/ReactNativeTypes';
import { ViewStyleProp } from '../StyleSheet/StyleSheet';
import { PressEvent } from '../Types/CoreEventTypes';
type Inspected = Readonly<{
  frame?: object;
  style?: ViewStyleProp;
}>;
type Props = Readonly<{
  isFabric: boolean;
  inspected?: Inspected;
  inspectedView?: React.ElementRef<HostComponent<unknown>> | null;
  onTouchViewTag: (tag: number, frame: object, pointerY: number) => unknown;
}>;

class InspectorOverlay extends React.Component<Props> {
  findViewForTouchEvent: (e: PressEvent) => void = (e: PressEvent) => {
    const {
      locationX,
      locationY
    } = e.nativeEvent.touches[0];
    UIManager.findSubviewIn(ReactNative.findNodeHandle(this.props.inspectedView), [locationX, locationY], (nativeViewTag, left, top, width, height) => {
      this.props.onTouchViewTag(nativeViewTag, {
        left,
        top,
        width,
        height
      }, locationY);
    });
  };
  shouldSetResponser: (e: PressEvent) => boolean = (e: PressEvent): boolean => {
    this.findViewForTouchEvent(e);
    return true;
  };

  render(): React.Node {
    let content = null;

    if (this.props.inspected) {
      content = <ElementBox frame={this.props.inspected.frame} style={this.props.inspected.style} />;
    }

    return <View onStartShouldSetResponder={this.shouldSetResponser} onResponderMove={this.findViewForTouchEvent} style={[styles.inspector, {
      height: Dimensions.get('window').height
    }]}>
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
module.exports = InspectorOverlay;