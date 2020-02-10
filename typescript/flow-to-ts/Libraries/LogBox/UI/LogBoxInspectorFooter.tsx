'use strict';
import { $ReadOnly } from "utility-types";












import { LogLevel } from "../Data/LogBoxLog";

import * as React from "react";
import DeviceInfo from "../../Utilities/DeviceInfo";
import StyleSheet from "../../StyleSheet/StyleSheet";
import Text from "../../Text/Text";
import View from "../../Components/View/View";
import LogBoxButton from "./LogBoxButton";
import * as LogBoxStyle from "./LogBoxStyle";

type Props = $ReadOnly<{
  onDismiss: (() => void);
  onMinimize: (() => void);
  level?: LogLevel | null | undefined;
}>;

function LogBoxInspectorFooter(props: Props): React.ReactNode {
  return null as any;
}

type ButtonProps = $ReadOnly<{
  onPress: (() => void);
  text: string;
}>;

function FooterButton(props: ButtonProps): React.ReactNode {
  return null as any;
}

const buttonStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: DeviceInfo.getConstants().isIPhoneX_deprecated ? 30 : 0
  },
  content: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center'
  },
  label: {
    color: LogBoxStyle.getTextColor(1),
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 20
  }
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: LogBoxStyle.getBackgroundColor(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    flexDirection: 'row'
  },
  button: {
    flex: 1
  },
  syntaxErrorText: {
    textAlign: 'center',
    width: '100%',
    height: 48,
    fontSize: 14,
    lineHeight: 20,
    paddingTop: 20,
    paddingBottom: 50,
    fontStyle: 'italic',
    color: LogBoxStyle.getTextColor(0.6)
  }
});

export default LogBoxInspectorFooter;
