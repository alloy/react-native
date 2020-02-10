import React from 'react';
import { $ReadOnly } from "utility-types";
import YellowBoxWarning from "../Data/YellowBoxWarning";
import { SymbolicationRequest } from "../Data/YellowBoxWarning";
declare type Props = $ReadOnly<{
    onDismiss: (() => void);
    onMinimize: (() => void);
    warnings: ReadonlyArray<YellowBoxWarning>;
}>;
declare type State = {
    selectedIndex: number;
};
declare class YellowBoxInspector extends React.Component<Props, State> {
    _symbolication: SymbolicationRequest | null | undefined;
    state: State;
    render(): React.ReactNode;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentWillUnmount(): void;
    _handleRetrySymbolication: () => void;
    _handleSymbolication(): void;
    _cancelSymbolication(): void;
    _handleSelectIndex: (selectedIndex: number) => void;
}
export default YellowBoxInspector;
