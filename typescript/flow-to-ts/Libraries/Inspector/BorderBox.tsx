'use strict';;
import React from 'react';
import View from '../Components/View/View';

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

export default BorderBox;;
