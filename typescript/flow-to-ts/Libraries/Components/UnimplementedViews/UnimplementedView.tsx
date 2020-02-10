'use strict';;
import React from 'react';
import StyleSheet from '../../StyleSheet/StyleSheet';
import View from '../View/View';

/**
 * Common implementation for a simple stubbed view. Simply applies the view's styles to the inner
 * View component and renders its children.
 */
class UnimplementedView extends React.Component<$FlowFixMeProps> {

  render(): React.ReactNode {
    return <View style={[styles.unimplementedView, this.props.style]}>
        {this.props.children}
      </View>;
  }
}

const styles = StyleSheet.create({
  unimplementedView: __DEV__ ? {
    alignSelf: 'flex-start',
    borderColor: 'red',
    borderWidth: 1
  } : {}
});

export default UnimplementedView;;
