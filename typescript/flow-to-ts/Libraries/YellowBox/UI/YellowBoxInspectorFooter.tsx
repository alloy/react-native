'use strict';;
import React from 'react';
import SafeAreaView from '../../Components/SafeAreaView/SafeAreaView';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import View from '../../Components/View/View';
import YellowBoxPressable from './YellowBoxPressable';
import YellowBoxStyle from './YellowBoxStyle';
import { $ReadOnly } from "utility-types";












type Props = $ReadOnly<{
  onDismiss: () => void;
  onMinimize: () => void;
}>;

const YellowBoxInspectorFooter = (props: Props): React.ReactNode => <View style={styles.root}>
    <YellowBoxPressable backgroundColor={{
    default: 'transparent',
    pressed: YellowBoxStyle.getHighlightColor(1)
  }} onPress={props.onMinimize} style={styles.button}>
      <View style={styles.content}>
        <Text style={styles.label}>Minimize</Text>
      </View>
      <SafeAreaView />
    </YellowBoxPressable>
    <YellowBoxPressable backgroundColor={{
    default: 'transparent',
    pressed: YellowBoxStyle.getHighlightColor(1)
  }} onPress={props.onDismiss} style={styles.button}>
      <View style={styles.content}>
        <Text style={styles.label}>Dismiss</Text>
      </View>
      <SafeAreaView />
    </YellowBoxPressable>
  </View>;

const styles = StyleSheet.create({
  root: {
    backgroundColor: YellowBoxStyle.getBackgroundColor(0.95),
    flexDirection: 'row'
  },
  button: {
    flex: 1
  },
  content: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center'
  },
  label: {
    color: YellowBoxStyle.getTextColor(1),
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 18
  }
});

export default YellowBoxInspectorFooter;
