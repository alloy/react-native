import { $ReadOnly } from "utility-types";
import * as React from "react";
import { PressEvent } from "../../Types/CoreEventTypes";
import { StackFrame } from "../../Core/NativeExceptionsManager";
declare type Props = $ReadOnly<{
    frame: StackFrame;
    onPress?: ((event: PressEvent) => void) | null | undefined;
}>;
declare function LogBoxInspectorStackFrame(props: Props): React.ReactNode;
export default LogBoxInspectorStackFrame;
