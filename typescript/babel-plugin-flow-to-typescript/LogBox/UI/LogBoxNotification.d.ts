import * as React from 'react';
import LogBoxLog from '../Data/LogBoxLog';
declare type Props = Readonly<{
    log: LogBoxLog;
    totalLogCount: number;
    level: "warn" | "error";
    onPressOpen: () => void;
    onPressDismiss: () => void;
}>;
declare function LogBoxLogNotification(props: Props): React.Node;
export default LogBoxLogNotification;
