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
  onPress?: ((event: PressEvent) => void) | null | undefined;
  style?: ViewStyleProp;
}>;

function LogBoxButton(props: Props): React.ReactNode {
  return null as any;
}

export default LogBoxButton;
