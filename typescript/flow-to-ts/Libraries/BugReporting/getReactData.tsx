'use strict';












/**
 * Convert a react internal instance to a sanitized data object.
 *
 * This is shamelessly stolen from react-devtools:
 * https://github.com/facebook/react-devtools/blob/master/backend/getData.js
 */
function getData(element: any): any {
  return null as any;
}

function setInProps(internalInst, path: Array<string | number>, value: any) {
  const element = internalInst._currentElement;
  internalInst._currentElement = {
    ...element,
    props: copyWithSet(element.props, path, value)
  };
  internalInst._instance.forceUpdate();
}

function setInState(inst, path: Array<string | number>, value: any) {
  setIn(inst.state, path, value);
  inst.forceUpdate();
}

function setInContext(inst, path: Array<string | number>, value: any) {
  setIn(inst.context, path, value);
  inst.forceUpdate();
}

function setIn(obj: any, path: Array<string | number>, value: any) {
  const last = path.pop();
  const parent = path.reduce((obj_, attr) => obj_ ? obj_[attr] : null, obj);
  if (parent) {
    parent[last] = value;
  }
}

function childrenList(children) {
  const res = [];
  for (const name in children) {
    res.push(children[name]);
  }
  return res;
}

function copyWithSetImpl(obj, path, idx, value) {
  if (idx >= path.length) {
    return value;
  }
  const key = path[idx];
  const updated = Array.isArray(obj) ? obj.slice() : { ...obj };
  // $FlowFixMe number or string is fine here
  updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value);
  return updated;
}

function copyWithSet(obj: any | Array<any>, path: Array<string | number>, value: any): any | Array<any> {
  return null as any;
}

export default getData;;
