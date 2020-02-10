import { $ReadOnly } from "utility-types";
import * as React from "react";
import { CodeFrame } from "../Data/parseLogBoxLog";
declare type Props = $ReadOnly<{
    codeFrame: CodeFrame | null | undefined;
}>;
declare function LogBoxInspectorCodeFrame(props: Props): React.ReactNode;
export default LogBoxInspectorCodeFrame;
