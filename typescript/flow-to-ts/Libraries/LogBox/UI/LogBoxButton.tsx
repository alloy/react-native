yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/LogBox/UI/LogBoxButton.js
'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";
import StyleSheet from "../../StyleSheet/StyleSheet";
import TouchableWithoutFeedback from "../../Components/Touchable/TouchableWithoutFeedback";
import View from "../../Components/View/View";
import * as LogBoxStyle from "./LogBoxStyle";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { PressEvent } from "../../Types/CoreEventTypes";

type Props = $ReadOnly<{
  backgroundColor: $ReadOnly<{
    default: string;
    pressed: string;
  }>;
  children?: React.ReactNode;
  hitSlop?: EdgeInsetsProp | null | undefined;
  onPress?: (event: PressEvent) => void | null | undefined;
  style?: ViewStyleProp;
}>;

function LogBoxButton(props: Props): React.ReactNode {
  const [pressed, setPressed] = React.useState(false);

  let backgroundColor = props.backgroundColor;
  if (!backgroundColor) {
    backgroundColor = {
      default: LogBoxStyle.getBackgroundColor(0.95),
      pressed: LogBoxStyle.getBackgroundColor(0.6)
    };
  }

  const content = <View style={StyleSheet.compose({
    backgroundColor: pressed ? backgroundColor.pressed : backgroundColor.default
  }, props.style)}>
      {props.children}
    </View>;

  return props.onPress == null ? content : <TouchableWithoutFeedback hitSlop={props.hitSlop} onPress={props.onPress} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)}>
      {content}
    </TouchableWithoutFeedback>;
}

export default LogBoxButton;
Done in 0.49s.
