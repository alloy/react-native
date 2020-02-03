import * as React from 'react';
import { LogLevel } from '../Data/LogBoxLog';
declare type Props = Readonly<{
    onSelectIndex: (selectedIndex: number) => void;
    selectedIndex: number;
    total: number;
    level: LogLevel;
}>;
declare function LogBoxInspectorHeader(props: Props): React.Node;
export default LogBoxInspectorHeader;
