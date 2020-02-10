'use strict';
import { $ReadOnly } from "utility-types";












import Image from "../../Image/Image";
import Platform from "../../Utilities/Platform";
import * as React from "react";
import StyleSheet from "../../StyleSheet/StyleSheet";
import Text from "../../Text/Text";
import View from "../../Components/View/View";
import StatusBar from "../../Components/StatusBar/StatusBar";
import LogBoxImageSource from "./LogBoxImageSource";
import LogBoxButton from "./LogBoxButton";
import * as LogBoxStyle from "./LogBoxStyle";
import { LogLevel } from "../Data/LogBoxLog";
type Props = $ReadOnly<{
  onSelectIndex: ((selectedIndex: number) => void);
  selectedIndex: number;
  total: number;
  level: LogLevel;
}>;

function LogBoxInspectorHeader(props: Props): React.ReactNode {
  return null as any;
}

const backgroundForLevel = (level: LogLevel) => ({
  warn: {
    default: 'transparent',
    pressed: LogBoxStyle.getWarningDarkColor()
  },
  error: {
    default: 'transparent',
    pressed: LogBoxStyle.getErrorDarkColor()
  },
  fatal: {
    default: 'transparent',
    pressed: LogBoxStyle.getFatalDarkColor()
  },
  syntax: {
    default: 'transparent',
    pressed: LogBoxStyle.getFatalDarkColor()
  }
})[level];

function LogBoxInspectorHeaderButton(props: $ReadOnly<{
  disabled: boolean;
  image: string;
  level: LogLevel;
  onPress?: (() => void) | null | undefined;
}>): React.ReactNode {
  return null as any;
}

const headerStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 6,
    marginLeft: 6,
    marginBottom: -8,
    borderRadius: 3
  },
  buttonImage: {
    tintColor: LogBoxStyle.getTextColor()
  }
});

const styles = StyleSheet.create({
  syntax: {
    backgroundColor: LogBoxStyle.getFatalColor()
  },
  fatal: {
    backgroundColor: LogBoxStyle.getFatalColor()
  },
  warn: {
    backgroundColor: LogBoxStyle.getWarningColor()
  },
  error: {
    backgroundColor: LogBoxStyle.getErrorColor()
  },
  header: {
    flexDirection: 'row',
    height: Platform.select({
      android: 48,
      ios: 44
    })
  },
  title: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  titleText: {
    color: LogBoxStyle.getTextColor(),
    fontSize: 16,
    fontWeight: '600',
    includeFontPadding: false,
    lineHeight: 20
  },
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40
  }
});

export default LogBoxInspectorHeader;
