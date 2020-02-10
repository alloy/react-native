import React from 'react';
import { $ReadOnly } from "utility-types";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
declare type Props = $ReadOnly<{
    devtoolsIsOpen: boolean;
    inspecting: boolean;
    setInspecting: ((val: boolean) => void);
    perfing: boolean;
    setPerfing: ((val: boolean) => void);
    touchTargeting: boolean;
    setTouchTargeting: ((val: boolean) => void);
    networking: boolean;
    setNetworking: ((val: boolean) => void);
    hierarchy?: Array<{
        name: string;
    }> | null | undefined;
    selection?: number | null | undefined;
    setSelection: ((arg0: number) => unknown);
    inspected?: $ReadOnly<{
        style?: ViewStyleProp | null | undefined;
        frame?: $ReadOnly<{
            top?: number | null | undefined;
            left?: number | null | undefined;
            width?: number | null | undefined;
            height: number | null | undefined;
        }> | null | undefined;
        source?: {
            fileName?: string;
            lineNumber?: number;
        } | null | undefined;
    }> | null | undefined;
}>;
declare class InspectorPanel extends React.Component<Props> {
    renderWaiting(): React.ReactNode;
    render(): React.ReactNode;
}
export default InspectorPanel;
