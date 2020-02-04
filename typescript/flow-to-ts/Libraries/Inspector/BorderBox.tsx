yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Inspector/BorderBox.js
'use strict';












const React = require('react');
const View = require('../Components/View/View');

class BorderBox extends React.Component<$FlowFixMeProps> {

  render(): $FlowFixMe | React.ReactNode {
    const box = this.props.box;
    if (!box) {
      return this.props.children;
    }
    const style = {
      borderTopWidth: box.top,
      borderBottomWidth: box.bottom,
      borderLeftWidth: box.left,
      borderRightWidth: box.right
    };
    return <View style={[style, this.props.style]}>{this.props.children}</View>;
  }
}

module.exports = BorderBox;
Done in 0.47s.
