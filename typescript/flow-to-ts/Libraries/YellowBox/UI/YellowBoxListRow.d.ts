import React from 'react';
import YellowBoxWarning from '../Data/YellowBoxWarning';
import { $ReadOnly } from "utility-types";
import { Category } from "../Data/YellowBoxCategory";
declare type Props = $ReadOnly<{
    category: Category;
    warnings: ReadonlyArray<YellowBoxWarning>;
    onPress: ((category: Category) => void);
}>;
declare class YellowBoxListRow extends React.Component<Props> {
    static GUTTER: number;
    static HEIGHT: number;
    shouldComponentUpdate(nextProps: Props): boolean;
    render(): React.ReactNode;
    _handlePress: () => void;
}
export default YellowBoxListRow;
