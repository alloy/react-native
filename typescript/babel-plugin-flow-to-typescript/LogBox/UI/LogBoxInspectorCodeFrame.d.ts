import * as React from 'react';
import { CodeFrame } from '../Data/parseLogBoxLog';
declare type Props = Readonly<{
    codeFrame: CodeFrame | undefined | null;
}>;
declare function LogBoxInspectorCodeFrame(props: Props): React.Node;
export default LogBoxInspectorCodeFrame;
