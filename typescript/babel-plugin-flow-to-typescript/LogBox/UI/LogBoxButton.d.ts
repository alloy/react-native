import * as React from 'react';
import { EdgeInsetsProp } from '../../StyleSheet/EdgeInsetsPropType';
import { ViewStyleProp } from '../../StyleSheet/StyleSheet';
import { PressEvent } from '../../Types/CoreEventTypes';
declare type Props = Readonly<{
    backgroundColor: Readonly<{
        default: string;
        pressed: string;
    }>;
    children?: React.Node;
    hitSlop?: EdgeInsetsProp | null;
    onPress?: ((event: PressEvent) => void) | null;
    style?: ViewStyleProp;
}>;
declare function LogBoxButton(props: Props): React.Node;
export default LogBoxButton;
