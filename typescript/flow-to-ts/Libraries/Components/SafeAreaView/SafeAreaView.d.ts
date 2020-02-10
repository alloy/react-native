import React from 'react';
import { $ReadOnly } from "utility-types";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare type Props = $ReadOnly<ViewProps & {
    emulateUnlessSupported?: boolean;
}>;
declare let exported: React.AbstractComponent<Props, React.ElementRef<HostComponent<unknown>>>;
export default exported;
