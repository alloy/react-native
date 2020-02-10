import React from 'react';
import { $ReadOnly } from "utility-types";
import { CompositeAnimation } from "../../Animated/src/AnimatedImplementation";
import AnimatedInterpolation from "../../Animated/src/nodes/AnimatedInterpolation";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type Props = $ReadOnly<{
    onPress?: ((event: PressEvent) => void) | null | undefined;
    status: "COMPLETE" | "FAILED" | "NONE" | "PENDING";
}>;
declare type State = {
    animation: CompositeAnimation | null | undefined;
    rotate: AnimatedInterpolation | null | undefined;
};
declare class YellowBoxInspectorSourceMapStatus extends React.Component<Props, State> {
    state: State;
    render(): React.ReactNode;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    _updateAnimation(): void;
}
export default YellowBoxInspectorSourceMapStatus;
