'use strict';
import { $ReadOnly } from "utility-types";












import LogBoxInspectorCodeFrame from "./LogBoxInspectorCodeFrame";
import * as React from "react";
import ScrollView from "../../Components/ScrollView/ScrollView";
import StyleSheet from "../../StyleSheet/StyleSheet";
import View from "../../Components/View/View";
import * as LogBoxData from "../Data/LogBoxData";
import Keyboard from "../../Components/Keyboard/Keyboard";
import LogBoxInspectorFooter from "./LogBoxInspectorFooter";
import LogBoxInspectorMessageHeader from "./LogBoxInspectorMessageHeader";
import LogBoxInspectorReactFrames from "./LogBoxInspectorReactFrames";
import LogBoxInspectorStackFrames from "./LogBoxInspectorStackFrames";
import LogBoxInspectorHeader from "./LogBoxInspectorHeader";
import * as LogBoxStyle from "./LogBoxStyle";
import LogBoxLog, { LogLevel } from "../Data/LogBoxLog";

type Props = $ReadOnly<{
  onDismiss: (() => void);
  onChangeSelectedIndex: ((index: number) => void);
  onMinimize: (() => void);
  logs: ReadonlyArray<LogBoxLog>;
  selectedIndex: number;
  fatalType?: LogLevel | null | undefined;
}>;

function LogBoxInspector(props: Props): React.ReactNode {
  return null as any;
}

const headerTitleMap = {
  warn: 'Warning',
  error: 'Error',
  fatal: 'Exception',
  syntax: 'Syntax Error',
  component: 'Component Exception'
};

function LogBoxInspectorBody(props) {
  const [collapsed, setCollapsed] = React.useState(true);

  React.useEffect(() => {
    setCollapsed(true);
  }, [props.log]);

  const headerTitle = headerTitleMap[props.log.isComponentError ? 'component' : props.log.level];

  if (collapsed) {
    return <>
        <LogBoxInspectorMessageHeader collapsed={collapsed} onPress={() => setCollapsed(!collapsed)} message={props.log.message} level={props.log.level} title={headerTitle} />
        <ScrollView style={styles.scrollBody}>
          <LogBoxInspectorCodeFrame codeFrame={props.log.codeFrame} />
          <LogBoxInspectorReactFrames log={props.log} />
          <LogBoxInspectorStackFrames log={props.log} onRetry={props.onRetry} />
        </ScrollView>
      </>;
  }
  return <ScrollView style={styles.scrollBody}>
      <LogBoxInspectorMessageHeader collapsed={collapsed} onPress={() => setCollapsed(!collapsed)} message={props.log.message} level={props.log.level} title={headerTitle} />
      <LogBoxInspectorCodeFrame codeFrame={props.log.codeFrame} />
      <LogBoxInspectorReactFrames log={props.log} />
      <LogBoxInspectorStackFrames log={props.log} onRetry={props.onRetry} />
    </ScrollView>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: LogBoxStyle.getTextColor()
  },
  scrollBody: {
    backgroundColor: LogBoxStyle.getBackgroundColor(0.9),
    flex: 1
  }
});

export default LogBoxInspector;
