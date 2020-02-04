yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/mapWithSeparator.js
'use strict';












function mapWithSeparator<TFrom, TTo>(items: Array<TFrom>, itemRenderer: (item: TFrom, index: number, items: Array<TFrom>) => TTo, spacerRenderer: (index: number) => TTo): Array<TTo> {
  const mapped = [];
  if (items.length > 0) {
    mapped.push(itemRenderer(items[0], 0, items));
    for (let ii = 1; ii < items.length; ii++) {
      mapped.push(spacerRenderer(ii - 1), itemRenderer(items[ii], ii, items));
    }
  }
  return mapped;
}

module.exports = mapWithSeparator;
Done in 0.46s.
