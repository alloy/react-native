import { $ReadOnly } from "utility-types";
import * as React from "react";
declare type Props = $ReadOnly<{
    heading: string;
    children: React.ReactNode;
    action?: React.ReactNode | null | undefined;
}>;
declare function LogBoxInspectorSection(props: Props): React.ReactNode;
export default LogBoxInspectorSection;
