yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/StyleSheet/processColorArray.js
'use strict';












const processColor = require('./processColor');

function processColorArray(colors: Array<string> | null | undefined): Array<number | null | undefined> | null | undefined {
  return colors == null ? null : colors.map(processColor);
}

module.exports = processColorArray;
Done in 0.47s.
