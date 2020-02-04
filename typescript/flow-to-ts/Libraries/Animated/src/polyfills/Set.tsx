yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Animated/src/polyfills/Set.js
'use strict';











function SetPolyfill() {
  this._cache = [];
}

SetPolyfill.prototype.add = function (e) {
  if (this._cache.indexOf(e) === -1) {
    this._cache.push(e);
  }
};

SetPolyfill.prototype.forEach = function (cb) {
  this._cache.forEach(cb);
};

module.exports = SetPolyfill;
Done in 0.45s.
