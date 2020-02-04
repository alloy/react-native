yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/groupByEveryN.js
'use strict';




























function groupByEveryN<T>(array: Array<T>, n: number): Array<Array<T | null | undefined>> {
  const result = [];
  let temp = [];

  for (let i = 0; i < array.length; ++i) {
    if (i > 0 && i % n === 0) {
      result.push(temp);
      temp = [];
    }
    temp.push(array[i]);
  }

  if (temp.length > 0) {
    while (temp.length !== n) {
      temp.push(null);
    }
    result.push(temp);
  }

  return result;
}

module.exports = groupByEveryN;
Done in 0.46s.
