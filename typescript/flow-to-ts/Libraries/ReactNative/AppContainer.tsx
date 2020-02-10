'use strict';;
import EmitterSubscription from '../vendor/emitter/EmitterSubscription';
import PropTypes from 'prop-types';
import RCTDeviceEventEmitter from '../EventEmitter/RCTDeviceEventEmitter';
import React from 'react';
import RootTagContext from './RootTagContext';
import StyleSheet from '../StyleSheet/StyleSheet';
import View from '../Components/View/View';
import Inspector from '../Inspector/Inspector';
import YellowBox from '../YellowBox/YellowBox';
import YellowBox from '../YellowBox/YellowBox';
import { $ReadOnly } from "utility-types";












type Context = {rootTag: number;};

type Props = $ReadOnly<{
  children?: React.ReactNode;
  fabric?: boolean;
  rootTag: number;
  showArchitectureIndicator?: boolean;
  WrapperComponent?: React.ComponentType<any> | null | undefined;
  internal_excludeLogBox?: boolean | null | undefined;
}>;

type State = {
  inspector: React.ReactNode | null | undefined;
  mainKey: number;
  hasError: boolean;
};

class AppContainer extends React.Component<Props, State> {

  state: State = {
    inspector: null,
    mainKey: 1,
    hasError: false
  };
  _mainRef: React.ElementRef<typeof View> | null | undefined;
  _subscription: EmitterSubscription | null | undefined = null;

  static getDerivedStateFromError: any = undefined;

  static childContextTypes: any | {rootTag: React$PropType$Primitive<number>;} = {
    rootTag: PropTypes.number
  };

  getChildContext(): Context {
    return {
      rootTag: this.props.rootTag
    };
  }

  componentDidMount(): void {
    if (__DEV__) {
      if (!global.__RCTProfileIsProfiling) {
        this._subscription = RCTDeviceEventEmitter.addListener('toggleElementInspector', () => {
          const inspector = this.state.inspector ? null : <Inspector isFabric={this.props.fabric === true} inspectedView={this._mainRef} onRequestRerenderApp={updateInspectedView => {
            this.setState(s => ({ mainKey: s.mainKey + 1 }), () => updateInspectedView(this._mainRef));
          }} />;
          this.setState({ inspector });
        });
      }
    }
  }

  componentWillUnmount(): void {
    if (this._subscription != null) {
      this._subscription.remove();
    }
  }

  render(): React.ReactNode {
    let yellowBox = null;
    if (__DEV__) {
      if (!global.__RCTProfileIsProfiling && !this.props.internal_excludeLogBox) {
        yellowBox = <YellowBox />;
      }
    }

    let innerView = <View collapsable={!this.state.inspector} key={this.state.mainKey} pointerEvents="box-none" style={styles.appContainer} ref={ref => {
      this._mainRef = ref;
    }}>
        {this.props.children}
      </View>;

    const Wrapper = this.props.WrapperComponent;
    if (Wrapper != null) {
      innerView = <Wrapper fabric={this.props.fabric === true} showArchitectureIndicator={this.props.showArchitectureIndicator === true}>
          {innerView}
        </Wrapper>;
    }
    return <RootTagContext.Provider value={this.props.rootTag}>
        <View style={styles.appContainer} pointerEvents="box-none">
          {!this.state.hasError && innerView}
          {this.state.inspector}
          {yellowBox}
        </View>
      </RootTagContext.Provider>;
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});

if (__DEV__) {
  if (!global.__RCTProfileIsProfiling) {
    YellowBox.install();
  }
}

export default AppContainer;;
