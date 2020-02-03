/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format strict-local
 * @flow
 */
'use strict';

type $ObjMap<T extends {}, F extends (v: any) => any> = { [K in keyof T]: F extends (v: T[K]) => infer R ? R : never };
type $ObjMapi<T extends {}, F extends (k: any, v: any) => any> = { [K in keyof T]: F extends (k: K, v: T[K]) => infer R ? R : never };

const DeprecatedImageStylePropTypes = require('../../DeprecatedPropTypes/DeprecatedImageStylePropTypes');

const DeprecatedTextStylePropTypes = require('../../DeprecatedPropTypes/DeprecatedTextStylePropTypes');

const DeprecatedViewStylePropTypes = require('../../DeprecatedPropTypes/DeprecatedViewStylePropTypes');

const processColor = require('../../StyleSheet/processColor');

const processTransform = require('../../StyleSheet/processTransform');

const sizesDiffer = require('../../Utilities/differ/sizesDiffer');

type ReturnBoolType = <V>(a: V) => true;
type BoolifiedDeprecatedViewStylePropTypes = $ObjMap<typeof DeprecatedViewStylePropTypes, ReturnBoolType>;
type BoolifiedDeprecatedTextStylePropTypes = $ObjMapi<typeof DeprecatedTextStylePropTypes, ReturnBoolType>;
type BoolifiedDeprecatedImageStylePropTypes = $ObjMapi<typeof DeprecatedImageStylePropTypes, ReturnBoolType>;
type StyleAttributesType = {
  transform: Readonly<{
    process: typeof processTransform;
  }> | true;
  shadowOffset: Readonly<{
    diff: typeof sizesDiffer;
  }> | true;
  backgroundColor: typeof colorAttributes | true;
  borderBottomColor: typeof colorAttributes | true;
  borderColor: typeof colorAttributes | true;
  borderLeftColor: typeof colorAttributes | true;
  borderRightColor: typeof colorAttributes | true;
  borderTopColor: typeof colorAttributes | true;
  borderStartColor: typeof colorAttributes | true;
  borderEndColor: typeof colorAttributes | true;
  color: typeof colorAttributes | true;
  shadowColor: typeof colorAttributes | true;
  textDecorationColor: typeof colorAttributes | true;
  tintColor: typeof colorAttributes | true;
  textShadowColor: typeof colorAttributes | true;
  overlayColor: typeof colorAttributes | true;
} & BoolifiedDeprecatedViewStylePropTypes & BoolifiedDeprecatedTextStylePropTypes & BoolifiedDeprecatedImageStylePropTypes;
const ReactNativeStyleAttributes: StyleAttributesType = {};

for (const attributeName of Object.keys({ ...DeprecatedViewStylePropTypes,
  ...DeprecatedTextStylePropTypes,
  ...DeprecatedImageStylePropTypes
})) {
  ReactNativeStyleAttributes[attributeName] = true;
}

ReactNativeStyleAttributes.transform = {
  process: processTransform
};
ReactNativeStyleAttributes.shadowOffset = {
  diff: sizesDiffer
};
const colorAttributes = {
  process: processColor
};
ReactNativeStyleAttributes.backgroundColor = colorAttributes;
ReactNativeStyleAttributes.borderBottomColor = colorAttributes;
ReactNativeStyleAttributes.borderColor = colorAttributes;
ReactNativeStyleAttributes.borderLeftColor = colorAttributes;
ReactNativeStyleAttributes.borderRightColor = colorAttributes;
ReactNativeStyleAttributes.borderTopColor = colorAttributes;
ReactNativeStyleAttributes.borderStartColor = colorAttributes;
ReactNativeStyleAttributes.borderEndColor = colorAttributes;
ReactNativeStyleAttributes.color = colorAttributes;
ReactNativeStyleAttributes.shadowColor = colorAttributes;
ReactNativeStyleAttributes.textDecorationColor = colorAttributes;
ReactNativeStyleAttributes.tintColor = colorAttributes;
ReactNativeStyleAttributes.textShadowColor = colorAttributes;
ReactNativeStyleAttributes.overlayColor = colorAttributes;
module.exports = ReactNativeStyleAttributes;