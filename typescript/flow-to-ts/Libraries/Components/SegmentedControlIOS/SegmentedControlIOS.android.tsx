yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.android.js
'use strict';











const React = require('react');
const StyleSheet = require('../../StyleSheet/StyleSheet');
const Text = require('../../Text/Text');
const View = require('../View/View');

class DummySegmentedControlIOS extends React.Component {

  render() {
    return <View style={[styles.dummy, this.props.style]}>
        <Text style={styles.text}>
          SegmentedControlIOS is not supported on this platform!
        </Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  dummy: {
    width: 120,
    height: 50,
    backgroundColor: '#ffbcbc',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#333333',
    margin: 5,
    fontSize: 10
  }
});

module.exports = DummySegmentedControlIOS;
Done in 0.46s.
