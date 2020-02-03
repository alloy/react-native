import * as React from 'react';
import { LogLevel } from '../Data/LogBoxLog';
import { Message } from '../Data/parseLogBoxLog';
declare type Props = Readonly<{
    collapsed: boolean;
    message: Message;
    level: LogLevel;
    title: string;
    onPress: () => void;
}>;
declare function LogBoxInspectorMessageHeader(props: Props): React.Node;
export default LogBoxInspectorMessageHeader;
