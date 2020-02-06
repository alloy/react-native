'use strict';;
import Image from '../../Image/Image';
import Platform from '../../Utilities/Platform';
import React from 'react';
import SafeAreaView from '../../Components/SafeAreaView/SafeAreaView';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import View from '../../Components/View/View';
import YellowBoxImageSource from './YellowBoxImageSource';
import YellowBoxPressable from './YellowBoxPressable';
import YellowBoxStyle from './YellowBoxStyle';
import { $ReadOnly } from "utility-types";












import YellowBoxWarning from "../Data/YellowBoxWarning";

type Props = $ReadOnly<{
  onSelectIndex: (selectedIndex: number) => void;
  selectedIndex: number;
  warnings: ReadonlyArray<YellowBoxWarning>;
}>;

const YellowBoxInspectorHeader = (props: Props): React.ReactNode => {
  const prevIndex = props.selectedIndex - 1;
  const nextIndex = props.selectedIndex + 1;

  const titleText = props.warnings.length === 1 ? 'Single Occurrence' : `Occurrence ${props.selectedIndex + 1} of ${props.warnings.length}`;

  return <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <YellowBoxInspectorHeaderButton disabled={props.warnings[prevIndex] == null} image={YellowBoxImageSource.chevronLeft} onPress={() => props.onSelectIndex(prevIndex)} />
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>{titleText}</Text>
        </View>
        <YellowBoxInspectorHeaderButton disabled={props.warnings[nextIndex] == null} image={YellowBoxImageSource.chevronRight} onPress={() => props.onSelectIndex(nextIndex)} />
      </View>
    </SafeAreaView>;
};

const YellowBoxInspectorHeaderButton = (props: $ReadOnly<{
  disabled: boolean;
  image: string;
  onPress?: () => void | null | undefined;
}>): React.ReactNode => <YellowBoxPressable backgroundColor={{
  default: 'transparent',
  pressed: YellowBoxStyle.getHighlightColor(1)
}} onPress={props.disabled ? null : props.onPress} style={styles.headerButton}>
    {props.disabled ? null : <Image source={{ height: 16, uri: props.image, width: 16 }} style={styles.headerButtonImage} />}
  </YellowBoxPressable>;

const styles = StyleSheet.create({
  root: {
    backgroundColor: YellowBoxStyle.getBackgroundColor(0.95)
  },
  header: {
    flexDirection: 'row',
    height: Platform.select({
      android: 48,
      ios: 44
    })
  },
  headerButton: {
    alignItems: 'center',
    aspectRatio: 1,
    justifyContent: 'center'
  },
  headerButtonImage: {
    tintColor: YellowBoxStyle.getTextColor(1)
  },
  headerTitle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  headerTitleText: {
    color: YellowBoxStyle.getTextColor(1),
    fontSize: 16,
    fontWeight: '600',
    includeFontPadding: false,
    lineHeight: 20
  }
});

export default YellowBoxInspectorHeader;
