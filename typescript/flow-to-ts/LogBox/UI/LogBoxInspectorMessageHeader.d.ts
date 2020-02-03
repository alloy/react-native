import { $ReadOnly } from "utility-types";
import * as React from "react";
import { LogLevel } from "../Data/LogBoxLog";
import { Message } from "../Data/parseLogBoxLog";
declare type Props = $ReadOnly<{
    collapsed: boolean;
    message: Message;
    level: LogLevel;
    title: string;
    onPress: () => void;
}>;
declare function LogBoxInspectorMessageHeader(props: Props): React.ReactNode;
export default LogBoxInspectorMessageHeader;
