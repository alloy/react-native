import React from 'react';
import { $ReadOnly } from "utility-types";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { PressEvent } from "../Types/CoreEventTypes";
declare type Inspected = $ReadOnly<{
    frame?: any;
    style?: ViewStyleProp;
}>;
declare type Props = $ReadOnly<{
    isFabric: boolean;
    inspected?: Inspected;
    inspectedView?: React.ElementRef<HostComponent<unknown>> | null | undefined;
    onTouchViewTag: ((tag: number, frame: any, pointerY: number) => unknown);
}>;
declare class InspectorOverlay extends React.Component<Props> {
    findViewForTouchEvent: ((e: PressEvent) => void);
    shouldSetResponser: ((e: PressEvent) => boolean);
    render(): React.ReactNode;
}
export default InspectorOverlay;
