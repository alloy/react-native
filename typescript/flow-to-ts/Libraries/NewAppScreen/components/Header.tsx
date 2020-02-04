yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/NewAppScreen/components/Header.js
'use strict';











import Colors from "./Colors";
import { Node } from "react";
import { Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const Header = (): Node => <ImageBackground accessibilityRole={'image'} source={require('./logo.png')} style={styles.background} imageStyle={styles.logo}>
    <Text style={styles.text}>Welcome to React</Text>
  </ImageBackground>;

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',

    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black
  }
});

export default Header;
Done in 0.47s.
