/**
 * Convert a react internal instance to a sanitized data object.
 *
 * This is shamelessly stolen from react-devtools:
 * https://github.com/facebook/react-devtools/blob/master/backend/getData.js
 */
declare function getData(element: object): object;
declare function setInProps(internalInst: any, path: Array<string | number>, value: any): void;
declare function setInState(inst: any, path: Array<string | number>, value: any): void;
declare function setInContext(inst: any, path: Array<string | number>, value: any): void;
declare function setIn(obj: object, path: Array<string | number>, value: any): void;
declare function childrenList(children: any): any[];
declare function copyWithSetImpl(obj: any, path: any, idx: any, value: any): any;
declare function copyWithSet(obj: object | Array<any>, path: Array<string | number>, value: any): object | Array<any>;
