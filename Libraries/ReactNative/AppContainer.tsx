'use strict';
import { $ReadOnly } from "utility-types";












const EmitterSubscription = require('../vendor/emitter/EmitterSubscription');
const PropTypes = require('prop-types');
const RCTDeviceEventEmitter = require('../EventEmitter/RCTDeviceEventEmitter');
const React = require('react');
const RootTagContext = require('./RootTagContext');
const StyleSheet = require('../StyleSheet/StyleSheet');
const View = require('../Components/View/View');

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
          const Inspector = require('../Inspector/Inspector');
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
        const YellowBox = require('../YellowBox/YellowBox');
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
    const YellowBox = require('../YellowBox/YellowBox');
    YellowBox.install();
  }
}

module.exports = AppContainer;