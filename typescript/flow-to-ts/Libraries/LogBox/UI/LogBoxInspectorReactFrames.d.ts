import { $ReadOnly } from "utility-types";
import * as React from "react";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = $ReadOnly<{
    log: LogBoxLog;
}>;
declare function LogBoxInspectorReactFrames(props: Props): React.ReactNode;
export default LogBoxInspectorReactFrames;
