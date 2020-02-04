'use strict';












const Platform = require('../../Utilities/Platform');

function processDecelerationRate(decelerationRate: number | "normal" | "fast"): number {
  if (decelerationRate === 'normal') {
    return Platform.select({
      ios: 0.998,
      android: 0.985
    });
  } else if (decelerationRate === 'fast') {
    return Platform.select({
      ios: 0.99,
      android: 0.9
    });
  }
  return decelerationRate;
}

module.exports = processDecelerationRate;
