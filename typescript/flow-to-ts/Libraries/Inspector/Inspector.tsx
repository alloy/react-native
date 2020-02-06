'use strict';;
import Dimensions from '../Utilities/Dimensions';
import InspectorOverlay from './InspectorOverlay';
import InspectorPanel from './InspectorPanel';
import Platform from '../Utilities/Platform';
import React from 'react';
import ReactNative from '../Renderer/shims/ReactNative';
import StyleSheet from '../StyleSheet/StyleSheet';
import Touchable from '../Components/Touchable/Touchable';
import View from '../Components/View/View';
import invariant from 'invariant';
import viewConfig from '../Components/View/ReactNativeViewViewConfig.js';

import { HostComponent } from "../Renderer/shims/ReactNativeTypes";

export type ReactRenderer = {
  getInspectorDataForViewTag: (viewTag: number) => Object;

};

const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
const renderers = findRenderers();

// Required for React DevTools to view/edit React Native styles in Flipper.
// Flipper doesn't inject these values when initializing DevTools.
hook.resolveRNStyle = require('../StyleSheet/flattenStyle');
hook.nativeStyleEditorValidAttributes = Object.keys(viewConfig.validAttributes.style);

function findRenderers(): ReadonlyArray<ReactRenderer> {
  const allRenderers = Array.from(hook.renderers.values());
  invariant(allRenderers.length >= 1, 'Expected to find at least one React Native renderer on DevTools hook.');
  return allRenderers;
}

function getInspectorDataForViewTag(touchedViewTag: number) {
  for (let i = 0; i < renderers.length; i++) {
    const renderer = renderers[i];
    if (Object.prototype.hasOwnProperty.call(renderer, 'getInspectorDataForViewTag')) {
      const inspectorData = renderer.getInspectorDataForViewTag(touchedViewTag);
      if (inspectorData.hierarchy.length > 0) {
        return inspectorData;
      }
    }
  }
  throw new Error('Expected to find at least one React renderer.');
}

type HostRef = React.ElementRef<HostComponent<unknown>>;

class Inspector extends React.Component<{
  isFabric: boolean;
  inspectedView: HostRef | null | undefined;
  onRequestRerenderApp: (callback: (instance: HostRef | null | undefined) => void) => void;

}, {
  devtoolsAgent: Object | null | undefined;
  hierarchy: any;
  panelPos: string;
  inspecting: boolean;
  selection: number | null | undefined;
  perfing: boolean;
  inspected: any;
  inspectedView: HostRef | null | undefined;
  networking: boolean;

}> {

  _hideTimeoutID: TimeoutID | null = null;
  _subs: Array<() => void> | null | undefined;

  constructor(props: Object) {
    super(props);

    this.state = {
      devtoolsAgent: null,
      hierarchy: null,
      panelPos: 'bottom',
      inspecting: true,
      perfing: false,
      inspected: null,
      selection: null,
      inspectedView: this.props.inspectedView,
      networking: false
    };
  }

  componentDidMount() {
    hook.on('react-devtools', this._attachToDevtools);
    // if devtools is already started
    if (hook.reactDevtoolsAgent) {
      this._attachToDevtools(hook.reactDevtoolsAgent);
    }
  }

  componentWillUnmount() {
    if (this._subs) {
      this._subs.map(fn => fn());
    }
    hook.off('react-devtools', this._attachToDevtools);
  }

  UNSAFE_componentWillReceiveProps(newProps: Object) {
    this.setState({ inspectedView: newProps.inspectedView });
  }

  _attachToDevtools = (agent: Object) => {
    agent.addListener('hideNativeHighlight', this._onAgentHideNativeHighlight);
    agent.addListener('showNativeHighlight', this._onAgentShowNativeHighlight);
    agent.addListener('shutdown', this._onAgentShutdown);

    this.setState({
      devtoolsAgent: agent
    });
  };

  _onAgentHideNativeHighlight = () => {
    if (this.state.inspected === null) {
      return;
    }
    // we wait to actually hide in order to avoid flicker
    this._hideTimeoutID = setTimeout(() => {
      this.setState({
        inspected: null
      });
    }, 100);
  };

  _onAgentShowNativeHighlight = node => {
    clearTimeout(this._hideTimeoutID);

    node.measure((x, y, width, height, left, top) => {
      this.setState({
        hierarchy: [],
        inspected: {
          frame: { left, top, width, height }
        }
      });
    });
  };

  _onAgentShutdown = () => {
    const agent = this.state.devtoolsAgent;
    if (agent != null) {
      agent.removeListener('hideNativeHighlight', this._onAgentHideNativeHighlight);
      agent.removeListener('showNativeHighlight', this._onAgentShowNativeHighlight);
      agent.removeListener('shutdown', this._onAgentShutdown);

      this.setState({ devtoolsAgent: null });
    }
  };

  setSelection(i: number) {
    const hierarchyItem = this.state.hierarchy[i];
    // we pass in ReactNative.findNodeHandle as the method is injected
    const {
      measure,
      props,
      source
    } = hierarchyItem.getInspectorData(ReactNative.findNodeHandle);

    measure((x, y, width, height, left, top) => {
      this.setState({
        inspected: {
          frame: { left, top, width, height },
          style: props.style,
          source
        },
        selection: i
      });
    });
  }

  onTouchViewTag(touchedViewTag: number, frame: Object, pointerY: number) {
    // Most likely the touched instance is a native wrapper (like RCTView)
    // which is not very interesting. Most likely user wants a composite
    // instance that contains it (like View)
    const {
      hierarchy,
      props,
      selection,
      source
    } = getInspectorDataForViewTag(touchedViewTag);

    if (this.state.devtoolsAgent) {
      // Skip host leafs
      this.state.devtoolsAgent.selectNode(touchedViewTag);
    }

    this.setState({
      panelPos: pointerY > Dimensions.get('window').height / 2 ? 'top' : 'bottom',
      selection,
      hierarchy,
      inspected: {
        style: props.style,
        frame,
        source
      }
    });
  }

  setPerfing(val: boolean) {
    this.setState({
      perfing: val,
      inspecting: false,
      inspected: null,
      networking: false
    });
  }

  setInspecting(val: boolean) {
    this.setState({
      inspecting: val,
      inspected: null
    });
  }

  setTouchTargeting(val: boolean) {
    Touchable.TOUCH_TARGET_DEBUG = val;
    this.props.onRequestRerenderApp(inspectedView => {
      this.setState({ inspectedView });
    });
  }

  setNetworking(val: boolean) {
    this.setState({
      networking: val,
      perfing: false,
      inspecting: false,
      inspected: null
    });
  }

  render(): React.ReactNode {
    const panelContainerStyle = this.state.panelPos === 'bottom' ? { bottom: 0 } : { top: Platform.OS === 'ios' ? 20 : 0 };
    return <View style={styles.container} pointerEvents="box-none">
        {this.state.inspecting && <InspectorOverlay isFabric={this.props.isFabric} inspected={this.state.inspected} inspectedView={this.state.inspectedView} onTouchViewTag={this.onTouchViewTag.bind(this)} />}
        <View style={[styles.panelContainer, panelContainerStyle]}>
          <InspectorPanel devtoolsIsOpen={!!this.state.devtoolsAgent} inspecting={this.state.inspecting} perfing={this.state.perfing} setPerfing={this.setPerfing.bind(this)} setInspecting={this.setInspecting.bind(this)} inspected={this.state.inspected} hierarchy={this.state.hierarchy} selection={this.state.selection} setSelection={this.setSelection.bind(this)} touchTargeting={Touchable.TOUCH_TARGET_DEBUG} setTouchTargeting={this.setTouchTargeting.bind(this)} networking={this.state.networking} setNetworking={this.setNetworking.bind(this)} />
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  panelContainer: {
    position: 'absolute',
    left: 0,
    right: 0
  }
});

export default Inspector;
