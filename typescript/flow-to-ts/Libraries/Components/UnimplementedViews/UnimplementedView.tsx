yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/UnimplementedViews/UnimplementedView.js
'use strict';












const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');

/**
 * Common implementation for a simple stubbed view. Simply applies the view's styles to the inner
 * View component and renders its children.
 */
class UnimplementedView extends React.Component<$FlowFixMeProps> {

  render(): React.ReactNode {
    // Workaround require cycle from requireNativeComponent
    const View = require('../View/View');
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

module.exports = UnimplementedView;
Done in 0.46s.
