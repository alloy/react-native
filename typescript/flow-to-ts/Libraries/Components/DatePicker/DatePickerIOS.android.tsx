'use strict';;
import React from 'react';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import View from '../View/View';

class DummyDatePickerIOS extends React.Component {

  render() {
    return <View style={[styles.dummyDatePickerIOS, this.props.style]}>
        <Text style={styles.datePickerText}>
          DatePickerIOS is not supported on this platform!
        </Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  dummyDatePickerIOS: {
    height: 100,
    width: 300,
    backgroundColor: '#ffbcbc',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  datePickerText: {
    color: '#333333',
    margin: 20
  }
});

export default DummyDatePickerIOS;;
