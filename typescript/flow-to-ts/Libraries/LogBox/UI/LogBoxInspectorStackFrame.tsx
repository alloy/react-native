'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";
import StyleSheet from "../../StyleSheet/StyleSheet";
import Text from "../../Text/Text";
import View from "../../Components/View/View";
import Platform from "../../Utilities/Platform";
import LogBoxButton from "./LogBoxButton";
import * as LogBoxStyle from "./LogBoxStyle";

import { PressEvent } from "../../Types/CoreEventTypes";
import { StackFrame } from "../../Core/NativeExceptionsManager";

type Props = $ReadOnly<{
  frame: StackFrame;
  onPress?: ((event: PressEvent) => void) | null | undefined;
}>;

function LogBoxInspectorStackFrame(props: Props): React.ReactNode {
  return null as any;
}

function getFileName(file) {
  if (file == null) {
    return '<unknown>';
  }
  const queryIndex = file.indexOf('?');
  return file.substring(file.lastIndexOf('/') + 1, queryIndex === -1 ? file.length : queryIndex);
}

const styles = StyleSheet.create({
  frameContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  frame: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  lineLocation: {
    flexDirection: 'row'
  },
  name: {
    color: LogBoxStyle.getTextColor(1),
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: Platform.select({ android: 'monospace', ios: 'Menlo' })
  },
  location: {
    color: LogBoxStyle.getTextColor(0.8),
    fontSize: 12,
    fontWeight: '300',
    includeFontPadding: false,
    lineHeight: 16,
    paddingLeft: 10
  },
  dim: {
    color: LogBoxStyle.getTextColor(0.4),
    fontWeight: '300'
  },
  line: {
    color: LogBoxStyle.getTextColor(0.8),
    fontSize: 12,
    fontWeight: '300',
    includeFontPadding: false,
    lineHeight: 16
  }
});

export default LogBoxInspectorStackFrame;
