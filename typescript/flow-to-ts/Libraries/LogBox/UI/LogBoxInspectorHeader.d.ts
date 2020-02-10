import { $ReadOnly } from "utility-types";
import * as React from "react";
import { LogLevel } from "../Data/LogBoxLog";
declare type Props = $ReadOnly<{
    onSelectIndex: ((selectedIndex: number) => void);
    selectedIndex: number;
    total: number;
    level: LogLevel;
}>;
declare function LogBoxInspectorHeader(props: Props): React.ReactNode;
export default LogBoxInspectorHeader;
