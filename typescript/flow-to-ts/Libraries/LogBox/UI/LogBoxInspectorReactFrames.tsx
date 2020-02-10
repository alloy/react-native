'use strict';
import { $ReadOnly } from "utility-types";












import * as React from "react";
import StyleSheet from "../../StyleSheet/StyleSheet";
import Platform from "../../Utilities/Platform";
import Text from "../../Text/Text";
import View from "../../Components/View/View";
import LogBoxButton from "./LogBoxButton";
import * as LogBoxStyle from "./LogBoxStyle";
import LogBoxInspectorSection from "./LogBoxInspectorSection";
import openFileInEditor from "../../Core/Devtools/openFileInEditor";
import LogBoxLog from "../Data/LogBoxLog";

type Props = $ReadOnly<{
  log: LogBoxLog;
}>;

const BEFORE_SLASH_RE = /^(.*)[\\/]/;

// Taken from React https://github.com/facebook/react/blob/206d61f72214e8ae5b935f0bf8628491cb7f0797/packages/react-devtools-shared/src/backend/describeComponentFrame.js#L27-L41
function getPrettyFileName(path) {
  let fileName = path.replace(BEFORE_SLASH_RE, '');

  // In DEV, include code for a common special case:
  // prefer "folder/index.js" instead of just "index.js".
  if (/^index\./.test(fileName)) {
    const match = path.match(BEFORE_SLASH_RE);
    if (match) {
      const pathBeforeSlash = match[1];
      if (pathBeforeSlash) {
        const folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
        // Note the below string contains a zero width space after the "/" character.
        // This is to prevent browsers like Chrome from formatting the file name as a link.
        // (Since this is a source link, it would not work to open the source file anyway.)
        fileName = folderName + '/​' + fileName;
      }
    }
  }

  return fileName;
}
function LogBoxInspectorReactFrames(props: Props): React.ReactNode {
  return null as any;
}

const componentStyles = StyleSheet.create({
  collapseContainer: {
    marginLeft: 15,
    flexDirection: 'row'
  },
  collapseButton: {
    borderRadius: 5
  },
  collapse: {
    color: LogBoxStyle.getTextColor(0.7),
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 20,
    marginTop: 0,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  frameContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  frame: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  component: {
    flexDirection: 'row',
    paddingRight: 10
  },
  frameName: {
    fontFamily: Platform.select({ android: 'monospace', ios: 'Menlo' }),
    color: LogBoxStyle.getTextColor(1),
    fontSize: 14,
    includeFontPadding: false,
    lineHeight: 18
  },
  bracket: {
    fontFamily: Platform.select({ android: 'monospace', ios: 'Menlo' }),
    color: LogBoxStyle.getTextColor(0.4),
    fontSize: 14,
    fontWeight: '500',
    includeFontPadding: false,
    lineHeight: 18
  },
  frameLocation: {
    color: LogBoxStyle.getTextColor(0.7),
    fontSize: 12,
    fontWeight: '300',
    includeFontPadding: false,
    lineHeight: 16,
    paddingLeft: 10
  }
});

export default LogBoxInspectorReactFrames;
