/**
 * Convert a react internal instance to a sanitized data object.
 *
 * This is shamelessly stolen from react-devtools:
 * https://github.com/facebook/react-devtools/blob/master/backend/getData.js
 */
declare function getData(element: Object): Object;
declare function setInProps(internalInst: any, path: Array<string | number>, value: any): void;
declare function setInState(inst: any, path: Array<string | number>, value: any): void;
declare function setInContext(inst: any, path: Array<string | number>, value: any): void;
declare function setIn(obj: Object, path: Array<string | number>, value: any): void;
declare function childrenList(children: any): any[];
declare function copyWithSetImpl(obj: any, path: any, idx: any, value: any): any;
declare function copyWithSet(obj: Object | Array<any>, path: Array<string | number>, value: any): Object | Array<any>;
