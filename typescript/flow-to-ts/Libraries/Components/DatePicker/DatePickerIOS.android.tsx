yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/DatePicker/DatePickerIOS.android.js
'use strict';











const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const Text = require('../../Text/Text');
const View = require('../View/View');

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

module.exports = DummyDatePickerIOS;
Done in 0.55s.
