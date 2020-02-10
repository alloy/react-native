'use strict';












type truncateOptions = {
  breakOnWords: boolean;
  minDelta: number;
  elipsis: string;

};

const defaultOptions = {
  breakOnWords: true,
  minDelta: 10, // Prevents truncating a tiny bit off the end
  elipsis: '...'
};

// maxChars (including ellipsis)
const truncate = function (str: string | null | undefined, maxChars: number, options?: truncateOptions): string | null | undefined {
  options = Object.assign({}, defaultOptions, options);
  if (str && str.length && str.length - options.minDelta + options.elipsis.length >= maxChars) {
    // If the slice is happening in the middle of a wide char, add one more char
    const extraChar = str.charCodeAt(maxChars - options.elipsis.length) > 255 ? 1 : 0;
    str = str.slice(0, maxChars - options.elipsis.length + 1 + extraChar);
    if (options.breakOnWords) {
      const ii = Math.max(str.lastIndexOf(' '), str.lastIndexOf('\n'));
      str = str.slice(0, ii);
    }
    str = str.trim() + options.elipsis;
  }
  return str;
};

export default truncate;;
