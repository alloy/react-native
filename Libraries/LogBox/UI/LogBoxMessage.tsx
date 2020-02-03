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
  const {
    content,
    substitutions
  }: Message = props.message;

  if (props.plaintext === true) {
    return <Text>{cleanContent(content)}</Text>;
  }

  const maxLength = props.maxLength != null ? props.maxLength : Infinity;
  const substitutionStyle: TextStyleProp = props.style;
  const elements = [];
  let length = 0;
  const createUnderLength = (key, message, style) => {
    let cleanMessage = cleanContent(message);

    if (props.maxLength != null) {
      cleanMessage = cleanMessage.slice(0, props.maxLength - length);
    }

    if (length < maxLength) {
      elements.push(<Text key={key} style={style}>
          {cleanMessage}
        </Text>);
    }

    length += cleanMessage.length;
  };

  const lastOffset = substitutions.reduce((prevOffset, substitution, index) => {
    const key = String(index);

    if (substitution.offset > prevOffset) {
      const prevPart = content.substr(prevOffset, substitution.offset - prevOffset);

      createUnderLength(key, prevPart);
    }

    const substititionPart = content.substr(substitution.offset, substitution.length);

    createUnderLength(key + '.5', substititionPart, substitutionStyle);
    return substitution.offset + substitution.length;
  }, 0);

  if (lastOffset < content.length) {
    const lastPart = content.substr(lastOffset);
    createUnderLength('-1', lastPart);
  }

  return <>{elements}</>;
}

export default LogBoxMessage;