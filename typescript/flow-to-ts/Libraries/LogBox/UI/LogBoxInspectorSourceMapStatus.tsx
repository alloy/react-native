'use strict';
import { $ReadOnly } from "utility-types";












import Animated from "../../Animated/src/Animated";
import Easing from "../../Animated/src/Easing";
import * as React from "react";
import StyleSheet from "../../StyleSheet/StyleSheet";
import Text from "../../Text/Text";
import LogBoxImageSource from "./LogBoxImageSource";
import LogBoxButton from "./LogBoxButton";
import * as LogBoxStyle from "./LogBoxStyle";

import { PressEvent } from "../../Types/CoreEventTypes";

type Props = $ReadOnly<{
  onPress?: ((event: PressEvent) => void) | null | undefined;
  status: "COMPLETE" | "FAILED" | "NONE" | "PENDING";
}>;

function LogBoxInspectorSourceMapStatus(props: Props): React.ReactNode {
  return null as any;
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    height: 24,
    paddingHorizontal: 8
  },
  image: {
    marginEnd: 4,
    tintColor: LogBoxStyle.getTextColor(0.4)
  },
  text: {
    fontSize: 12,
    includeFontPadding: false,
    lineHeight: 16
  }
});

export default LogBoxInspectorSourceMapStatus;
