/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import { ansiToJson } from "anser";
import Text from "../../Text/Text";
import View from "../../Components/View/View";
import * as React from "react";

import { TextStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

// Afterglow theme from https://iterm2colorschemes.com/
const COLORS = {
  'ansi-black': 'rgb(27, 27, 27)',
  'ansi-red': 'rgb(187, 86, 83)',
  'ansi-green': 'rgb(144, 157, 98)',
  'ansi-yellow': 'rgb(234, 193, 121)',
  'ansi-blue': 'rgb(125, 169, 199)',
  'ansi-magenta': 'rgb(176, 101, 151)',
  'ansi-cyan': 'rgb(140, 220, 216)',
  // Instead of white, use the default color provided to the component
  // 'ansi-white': 'rgb(216, 216, 216)',
  'ansi-bright-black': 'rgb(98, 98, 98)',
  'ansi-bright-red': 'rgb(187, 86, 83)',
  'ansi-bright-green': 'rgb(144, 157, 98)',
  'ansi-bright-yellow': 'rgb(234, 193, 121)',
  'ansi-bright-blue': 'rgb(125, 169, 199)',
  'ansi-bright-magenta': 'rgb(176, 101, 151)',
  'ansi-bright-cyan': 'rgb(140, 220, 216)',
  'ansi-bright-white': 'rgb(247, 247, 247)'
};

export default function Ansi({
  text,
  style
}: {
  text: string;
  style: TextStyleProp;

}): React.ReactNode {
  return null as any;
}
