import { $ReadOnly } from "utility-types";
import * as React from "react";
import LogBoxLog from "./Data/LogBoxLog";
declare type Props = $ReadOnly<{
    logs: ReadonlyArray<LogBoxLog>;
    selectedLogIndex: number;
    isDisabled?: boolean | null | undefined;
}>;
export declare function _LogBoxNotificationContainer(props: Props): React.ReactNode;
declare const _default: any;
export default _default;
