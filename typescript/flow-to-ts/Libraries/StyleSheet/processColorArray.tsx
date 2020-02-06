'use strict';;
import processColor from './processColor';

function processColorArray(colors: Array<string> | null | undefined): Array<number | null | undefined> | null | undefined {
  return colors == null ? null : colors.map(processColor);
}

export default processColorArray;
