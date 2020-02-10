'use strict';;
import PerformanceLogger from '../Utilities/GlobalPerformanceLogger';
import React from 'react';
import StyleSheet from '../StyleSheet/StyleSheet';
import Text from '../Text/Text';
import View from '../Components/View/View';

class PerformanceOverlay extends React.Component<{}> {

  render(): React.ReactNode {
    const perfLogs = PerformanceLogger.getTimespans();
    const items = [];

    for (const key in perfLogs) {
      if (perfLogs[key].totalTime) {
        const unit = key === 'BundleSize' ? 'b' : 'ms';
        items.push(<View style={styles.row} key={key}>
            <Text style={[styles.text, styles.label]}>{key}</Text>
            <Text style={[styles.text, styles.totalTime]}>
              {perfLogs[key].totalTime + unit}
            </Text>
          </View>);
      }
    }

    return <View style={styles.container}>{items}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingTop: 10
  },
  label: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  text: {
    color: 'white',
    fontSize: 12
  },
  totalTime: {
    paddingRight: 100
  }
});

export default PerformanceOverlay;;
