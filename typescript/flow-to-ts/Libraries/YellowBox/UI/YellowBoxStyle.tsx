yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/YellowBox/UI/YellowBoxStyle.js
'use strict';












const YellowBoxStyle = {
  getBackgroundColor(opacity: number): string {
    return `rgba(250, 186, 48, ${opacity})`;
  },

  getDividerColor(opacity: number): string {
    return `rgba(255, 255, 255, ${opacity})`;
  },

  getHighlightColor(opacity: number): string {
    return `rgba(252, 176, 29, ${opacity})`;
  },

  getTextColor(opacity: number): string {
    return `rgba(255, 255, 255, ${opacity})`;
  }
};

module.exports = YellowBoxStyle;
Done in 0.47s.
