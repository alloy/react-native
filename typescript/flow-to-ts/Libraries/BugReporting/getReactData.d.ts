/**
 * Convert a react internal instance to a sanitized data object.
 *
 * This is shamelessly stolen from react-devtools:
 * https://github.com/facebook/react-devtools/blob/master/backend/getData.js
 */
declare function getData(element: any): any;
export default getData;
