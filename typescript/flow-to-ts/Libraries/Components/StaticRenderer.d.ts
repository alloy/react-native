import React from 'react';
import { $ReadOnly } from "utility-types";
declare type Props = $ReadOnly<{
    /**
     * Indicates whether the render function needs to be called again
     */
    shouldUpdate: boolean;
    /**
     * () => renderable
     * A function that returns a renderable component
     */
    render: (() => React.ReactNode);
}>;
declare class StaticRenderer extends React.Component<Props> {
    shouldComponentUpdate(nextProps: Props): boolean;
    render(): React.ReactNode;
}
export default StaticRenderer;
