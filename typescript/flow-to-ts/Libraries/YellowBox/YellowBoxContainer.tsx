'use strict';
import { $ReadOnly } from "utility-types";












const React = require('react');

import { Category } from "./Data/YellowBoxCategory";
import { Registry, Subscription } from "./Data/YellowBoxRegistry";

type Props = $ReadOnly<{}>;
type State = $ReadOnly<{
  registry: Registry | null | undefined;
}>;

const YellowBoxList = require('./UI/YellowBoxList');
const YellowBoxRegistry = require('./Data/YellowBoxRegistry');

class YellowBoxContainer extends React.Component<Props, State> {

  _subscription: Subscription | null | undefined;

  state: State = {
    registry: null
  };

  render(): React.ReactNode {
    // TODO: Ignore warnings that fire when rendering `YellowBox` itself.
    return this.state.registry == null ? null : <YellowBoxList onDismiss={this._handleDismiss} onDismissAll={this._handleDismissAll} registry={this.state.registry} />;
  }

  componentDidMount(): void {
    this._subscription = YellowBoxRegistry.observe(registry => {
      this.setState({ registry });
    });
  }

  componentWillUnmount(): void {
    if (this._subscription != null) {
      this._subscription.unsubscribe();
    }
  }

  _handleDismiss = (category: Category): void => {
    YellowBoxRegistry.delete(category);
  };

  _handleDismissAll(): void {
    YellowBoxRegistry.clear();
  }
}

export default YellowBoxContainer;
