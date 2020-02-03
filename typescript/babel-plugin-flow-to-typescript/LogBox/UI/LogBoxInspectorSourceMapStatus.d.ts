import * as React from 'react';
import { PressEvent } from '../../Types/CoreEventTypes';
declare type Props = Readonly<{
    onPress?: ((event: PressEvent) => void) | null;
    status: "COMPLETE" | "FAILED" | "NONE" | "PENDING";
}>;
declare function LogBoxInspectorSourceMapStatus(props: Props): React.Node;
export default LogBoxInspectorSourceMapStatus;
