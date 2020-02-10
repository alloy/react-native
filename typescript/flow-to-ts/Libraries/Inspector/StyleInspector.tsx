'use strict';;
import React from 'react';
import StyleSheet from '../StyleSheet/StyleSheet';
import Text from '../Text/Text';
import View from '../Components/View/View';

class StyleInspector extends React.Component<$FlowFixMeProps> {

  render(): React.ReactNode {
    if (!this.props.style) {
      return <Text style={styles.noStyle}>No style</Text>;
    }
    const names = Object.keys(this.props.style);
    return <View style={styles.container}>
        <View>
          {names.map(name => <Text key={name} style={styles.attr}>
              {name}:
            </Text>)}
        </View>

        <View>
          {names.map(name => {
          const value = this.props.style[name];
          return <Text key={name} style={styles.value}>
                {typeof value !== 'string' && typeof value !== 'number' ? JSON.stringify(value) : value}
              </Text>;
        })}
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  attr: {
    fontSize: 10,
    color: '#ccc'
  },
  value: {
    fontSize: 10,
    color: 'white',
    marginLeft: 10
  },
  noStyle: {
    color: 'white',
    fontSize: 10
  }
});

export default StyleInspector;;
