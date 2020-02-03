import * as React from 'react';
import { TextStyleProp } from '../../StyleSheet/StyleSheet';
import { Message } from '../Data/parseLogBoxLog';
declare type Props = {
    message: Message;
    style: TextStyleProp;
    plaintext?: boolean | null;
    maxLength?: number | null;
};
declare function LogBoxMessage(props: Props): React.Node;
export default LogBoxMessage;
