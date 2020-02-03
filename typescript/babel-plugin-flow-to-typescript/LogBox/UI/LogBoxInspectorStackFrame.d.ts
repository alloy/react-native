import * as React from 'react';
import { PressEvent } from '../../Types/CoreEventTypes';
import { StackFrame } from '../../Core/NativeExceptionsManager';
declare type Props = Readonly<{
    frame: StackFrame;
    onPress?: ((event: PressEvent) => void) | null;
}>;
declare function LogBoxInspectorStackFrame(props: Props): React.Node;
export default LogBoxInspectorStackFrame;
