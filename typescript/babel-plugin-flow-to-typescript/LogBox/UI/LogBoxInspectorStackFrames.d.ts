import * as React from 'react';
import { Stack } from '../Data/LogBoxSymbolication';
import LogBoxLog from '../Data/LogBoxLog';
declare type Props = Readonly<{
    log: LogBoxLog;
    onRetry: () => void;
}>;
export declare function getCollapseMessage(stackFrames: Stack, collapsed: boolean): string;
declare function LogBoxInspectorStackFrames(props: Props): React.Node;
export default LogBoxInspectorStackFrames;
