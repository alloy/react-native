import * as React from 'react';
import LogBoxLog, { LogLevel } from '../Data/LogBoxLog';
declare type Props = Readonly<{
    onDismiss: () => void;
    onChangeSelectedIndex: (index: number) => void;
    onMinimize: () => void;
    logs: ReadonlyArray<LogBoxLog>;
    selectedIndex: number;
    fatalType?: LogLevel | null;
}>;
declare function LogBoxInspector(props: Props): React.Node;
export default LogBoxInspector;
