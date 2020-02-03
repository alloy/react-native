import * as React from 'react';
import LogBoxLog from './Data/LogBoxLog';
declare type Props = Readonly<{
    logs: ReadonlyArray<LogBoxLog>;
    selectedLogIndex: number;
    isDisabled?: boolean | null;
}>;
export declare function _LogBoxNotificationContainer(props: Props): React.Node;
declare const _default: any;
export default _default;
