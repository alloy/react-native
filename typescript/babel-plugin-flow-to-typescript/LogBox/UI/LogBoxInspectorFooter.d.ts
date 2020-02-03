import { LogLevel } from '../Data/LogBoxLog';
import * as React from 'react';
declare type Props = Readonly<{
    onDismiss: () => void;
    onMinimize: () => void;
    level?: LogLevel | null;
}>;
declare function LogBoxInspectorFooter(props: Props): React.Node;
export default LogBoxInspectorFooter;
