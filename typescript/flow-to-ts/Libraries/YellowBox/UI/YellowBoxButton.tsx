'use strict';;
import React from 'react';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import YellowBoxPressable from './YellowBoxPressable';
import YellowBoxStyle from './YellowBoxStyle';
import { $ReadOnly } from "utility-types";












import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";

type Props = $ReadOnly<{
  hitSlop?: EdgeInsetsProp | null | undefined;
  label: string;
  onPress: () => void;
}>;

const YellowBoxButton = (props: Props): React.ReactNode => <YellowBoxPressable hitSlop={props.hitSlop} onPress={props.onPress} style={styles.root}>
    <Text numberOfLines={1} style={styles.label}>
      {props.label}
    </Text>
  </YellowBoxPressable>;

const styles = StyleSheet.create({
  root: {
    borderRadius: 14,
    height: 28,
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  label: {
    color: YellowBoxStyle.getTextColor(1),
    fontSize: 12,
    includeFontPadding: false,
    lineHeight: 16
  }
});

export default YellowBoxButton;
