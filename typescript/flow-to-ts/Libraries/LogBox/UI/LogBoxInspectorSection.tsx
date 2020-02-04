'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";
import StyleSheet from "../../StyleSheet/StyleSheet";
import Text from "../../Text/Text";
import View from "../../Components/View/View";
import * as LogBoxStyle from "./LogBoxStyle";

type Props = $ReadOnly<{
  heading: string;
  children: React.ReactNode;
  action?: React.ReactNode | null | undefined;
}>;

function LogBoxInspectorSection(props: Props): React.ReactNode {
  return <View style={styles.section}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{props.heading}</Text>
        {props.action}
      </View>
      <View style={styles.body}>{props.children}</View>
    </View>;
}

const styles = StyleSheet.create({
  section: {
    marginTop: 15
  },
  heading: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: 10
  },
  headingText: {
    color: LogBoxStyle.getTextColor(1),
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    includeFontPadding: false,
    lineHeight: 20
  },
  body: {
    paddingBottom: 10
  }
});

export default LogBoxInspectorSection;
