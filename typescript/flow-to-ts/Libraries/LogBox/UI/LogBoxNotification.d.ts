import { $ReadOnly } from "utility-types";
import * as React from "react";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = $ReadOnly<{
    log: LogBoxLog;
    totalLogCount: number;
    level: "warn" | "error";
    onPressOpen: (() => void);
    onPressDismiss: (() => void);
}>;
declare function LogBoxLogNotification(props: Props): React.ReactNode;
export default LogBoxLogNotification;
