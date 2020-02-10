'use strict';












import * as React from "react";
import Text from "../../Text/Text";

import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { Message } from "../Data/parseLogBoxLog";

type Props = {
  message: Message;
  style: TextStyleProp;
  plaintext?: boolean | null | undefined;
  maxLength?: number | null | undefined;

};

const cleanContent = content => content.replace(/^(TransformError |Warning: (Warning: )?|Error: )/g, '');

function LogBoxMessage(props: Props): React.ReactNode {
  return null as any;
}

export default LogBoxMessage;
