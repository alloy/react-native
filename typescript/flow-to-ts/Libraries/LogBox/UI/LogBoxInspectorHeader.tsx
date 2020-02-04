yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/LogBox/UI/LogBoxInspectorHeader.js
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
  onSelectIndex: (selectedIndex: number) => void;
  selectedIndex: number;
  total: number;
  level: LogLevel;
}>;

function LogBoxInspectorHeader(props: Props): React.ReactNode {
  if (props.level === 'syntax') {
    return <View style={[styles.safeArea, styles[props.level]]}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Failed to compile</Text>
          </View>
        </View>
      </View>;
  }

  const prevIndex = props.selectedIndex - 1 < 0 ? props.total - 1 : props.selectedIndex - 1;
  const nextIndex = props.selectedIndex + 1 > props.total - 1 ? 0 : props.selectedIndex + 1;

  const titleText = `Log ${props.selectedIndex + 1} of ${props.total}`;

  return <View style={[styles.safeArea, styles[props.level]]}>
      <View style={styles.header}>
        <LogBoxInspectorHeaderButton disabled={props.total <= 1} level={props.level} image={LogBoxImageSource.chevronLeft} onPress={() => props.onSelectIndex(prevIndex)} />
        <View style={styles.title}>
          <Text style={styles.titleText}>{titleText}</Text>
        </View>
        <LogBoxInspectorHeaderButton disabled={props.total <= 1} level={props.level} image={LogBoxImageSource.chevronRight} onPress={() => props.onSelectIndex(nextIndex)} />
      </View>
    </View>;
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
  onPress?: () => void | null | undefined;
}>): React.ReactNode {
  return <LogBoxButton backgroundColor={backgroundForLevel(props.level)} onPress={props.disabled ? null : props.onPress} style={headerStyles.button}>
      {props.disabled ? null : <Image source={{ height: 16, uri: props.image, width: 16 }} style={headerStyles.buttonImage} />}
    </LogBoxButton>;
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
Done in 0.50s.
