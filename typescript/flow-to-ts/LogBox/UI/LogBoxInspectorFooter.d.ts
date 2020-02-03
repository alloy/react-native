import { $ReadOnly } from "utility-types";
import { LogLevel } from "../Data/LogBoxLog";
import * as React from "react";
declare type Props = $ReadOnly<{
    onDismiss: () => void;
    onMinimize: () => void;
    level?: LogLevel | null | undefined;
}>;
declare function LogBoxInspectorFooter(props: Props): React.ReactNode;
export default LogBoxInspectorFooter;
