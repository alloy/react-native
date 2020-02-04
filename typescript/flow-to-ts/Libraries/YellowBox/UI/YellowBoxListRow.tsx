yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/YellowBox/UI/YellowBoxListRow.js
'use strict';
import { $ReadOnly } from "utility-types";












const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const Text = require('../../Text/Text');
const View = require('../../Components/View/View');
const YellowBoxCategory = require('../Data/YellowBoxCategory');
const YellowBoxPressable = require('./YellowBoxPressable');
const YellowBoxStyle = require('./YellowBoxStyle');
const YellowBoxWarning = require('../Data/YellowBoxWarning');

import { Category } from "../Data/YellowBoxCategory";

type Props = $ReadOnly<{
  category: Category;
  warnings: ReadonlyArray<YellowBoxWarning>;
  onPress: (category: Category) => void;
}>;

class YellowBoxListRow extends React.Component<Props> {

  static GUTTER: number = StyleSheet.hairlineWidth;
  static HEIGHT: number = 48;

  shouldComponentUpdate(nextProps: Props): boolean {
    const prevProps = this.props;
    return prevProps.category !== nextProps.category || prevProps.onPress !== nextProps.onPress || prevProps.warnings.length !== nextProps.warnings.length || prevProps.warnings.some((prevWarning, index) => prevWarning !== nextProps.warnings[index]);
  }

  render(): React.ReactNode {
    const {
      warnings
    } = this.props;

    return <YellowBoxPressable onPress={this._handlePress} style={styles.root}>
        <View style={styles.content}>
          {warnings.length < 2 ? null : <Text style={styles.metaText}>{'(' + warnings.length + ') '}</Text>}
          <Text numberOfLines={2} style={styles.bodyText}>
            {YellowBoxCategory.render(warnings[warnings.length - 1].message, styles.substitutionText)}
          </Text>
        </View>
      </YellowBoxPressable>;
  }

  _handlePress = () => {
    this.props.onPress(this.props.category);
  };
}

const styles = StyleSheet.create({
  root: {
    height: YellowBoxListRow.HEIGHT,
    justifyContent: 'center',
    marginTop: YellowBoxListRow.GUTTER,
    paddingHorizontal: 12
  },
  content: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  bodyText: {
    color: YellowBoxStyle.getTextColor(1),
    flex: 1,
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 18
  },
  metaText: {
    color: YellowBoxStyle.getTextColor(0.5),
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 18
  },
  substitutionText: {
    color: YellowBoxStyle.getTextColor(0.6)
  }
});

module.exports = YellowBoxListRow;
Done in 0.48s.
