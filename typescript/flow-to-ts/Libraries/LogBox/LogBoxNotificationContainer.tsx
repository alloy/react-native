'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";
import StyleSheet from "../StyleSheet/StyleSheet";
import View from "../Components/View/View";
import * as LogBoxData from "./Data/LogBoxData";
import LogBoxLog from "./Data/LogBoxLog";
import LogBoxLogNotification from "./UI/LogBoxNotification";

type Props = $ReadOnly<{
  logs: ReadonlyArray<LogBoxLog>;
  selectedLogIndex: number;
  isDisabled?: boolean | null | undefined;
}>;

export function _LogBoxNotificationContainer(props: Props): React.ReactNode {
  return null as any;
}

const styles = StyleSheet.create({
  list: {
    bottom: 20,
    left: 10,
    right: 10,
    position: 'absolute'
  },
  toast: {
    borderRadius: 8,
    marginBottom: 5,
    overflow: 'hidden'
  }
});

export default (LogBoxData.withSubscription(_LogBoxNotificationContainer) as React.AbstractComponent<{}>);
