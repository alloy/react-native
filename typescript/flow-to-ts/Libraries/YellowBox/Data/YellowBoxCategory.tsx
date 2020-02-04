yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/YellowBox/Data/YellowBoxCategory.js
'use strict';
import { $ReadOnly } from "utility-types";












const React = require('react');
const Text = require('../../Text/Text');
const UTFSequence = require('../../UTFSequence');

const stringifySafe = require('../../Utilities/stringifySafe');

import { TextStyleProp } from "../../StyleSheet/StyleSheet";

export type Category = string;
export type Message = $ReadOnly<{
  content: string;
  substitutions: ReadonlyArray<$ReadOnly<{
    length: number;
    offset: number;
  }>>;
}>;

const SUBSTITUTION = UTFSequence.BOM + '%s';

const YellowBoxCategory = {
  parse(args: ReadonlyArray<unknown>): $ReadOnly<{
    category: Category;
    message: Message;
  }> {
    const categoryParts = [];
    const contentParts = [];
    const substitutionOffsets = [];

    const remaining = [...args];

    if (typeof remaining[0] === 'string') {
      const formatString = String(remaining.shift());
      const formatStringParts = formatString.split('%s');
      const substitutionCount = formatStringParts.length - 1;
      const substitutions = remaining.splice(0, substitutionCount);

      let categoryString = '';
      let contentString = '';

      let substitutionIndex = 0;
      for (const formatStringPart of formatStringParts) {
        categoryString += formatStringPart;
        contentString += formatStringPart;

        if (substitutionIndex < substitutionCount) {
          if (substitutionIndex < substitutions.length) {
            // Don't stringify a string type.
            // It adds quotation mark wrappers around the string,
            // which causes the yellow box to look odd.
            const substitution = typeof substitutions[substitutionIndex] === 'string' ? substitutions[substitutionIndex] : stringifySafe(substitutions[substitutionIndex]);
            substitutionOffsets.push({
              length: substitution.length,
              offset: contentString.length
            });

            categoryString += SUBSTITUTION;
            contentString += substitution;
          } else {
            substitutionOffsets.push({
              length: 2,
              offset: contentString.length
            });

            categoryString += '%s';
            contentString += '%s';
          }

          substitutionIndex++;
        }
      }

      categoryParts.push(categoryString);
      contentParts.push(contentString);
    }

    const remainingArgs = remaining.map(arg => {
      // Don't stringify a string type.
      // It adds quotation mark wrappers around the string,
      // which causes the yellow box to look odd.
      return typeof arg === 'string' ? arg : stringifySafe(arg);
    });
    categoryParts.push(...remainingArgs);
    contentParts.push(...remainingArgs);

    return {
      category: categoryParts.join(' '),
      message: {
        content: contentParts.join(' '),
        substitutions: substitutionOffsets
      }
    };
  },

  render({
    content,
    substitutions
  }: Message, substitutionStyle: TextStyleProp): React.ReactNode {
    const elements = [];

    const lastOffset = substitutions.reduce((prevOffset, substitution, index) => {
      const key = String(index);

      if (substitution.offset > prevOffset) {
        const prevPart = content.substr(prevOffset, substitution.offset - prevOffset);
        elements.push(<Text key={key}>{prevPart}</Text>);
      }

      const substititionPart = content.substr(substitution.offset, substitution.length);
      elements.push(<Text key={key + '.5'} style={substitutionStyle}>
            {substititionPart}
          </Text>);

      return substitution.offset + substitution.length;
    }, 0);

    if (lastOffset < content.length) {
      const lastPart = content.substr(lastOffset);
      elements.push(<Text key="-1">{lastPart}</Text>);
    }

    return elements;
  }
};

module.exports = YellowBoxCategory;
Done in 0.50s.
