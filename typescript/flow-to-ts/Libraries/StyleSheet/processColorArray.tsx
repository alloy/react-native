'use strict';












const processColor = require('./processColor');

function processColorArray(colors: Array<string> | null | undefined): Array<number | null | undefined> | null | undefined {
  return colors == null ? null : colors.map(processColor);
}

module.exports = processColorArray;
