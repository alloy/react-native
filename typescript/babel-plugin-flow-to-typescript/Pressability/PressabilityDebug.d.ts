import * as React from 'react';
declare type Props = Readonly<{
    color: string;
    hitSlop: Readonly<{
        bottom?: number | null;
        left?: number | null;
        right?: number | null;
        top?: number | null;
    }> | undefined | null;
}>;
/**
 * Displays a debug overlay to visualize press targets when enabled via the
 * React Native Inspector. Calls to this module should be guarded by `__DEV__`,
 * for example:
 *
 *   return (
 *     <View>
 *       {children}
 *       {__DEV__ ? (
 *         <PressabilityDebugView color="..." hitSlop={props.hitSlop} />
 *       ) : null}
 *     </View>
 *   );
 *
 */
export declare function PressabilityDebugView({ color, hitSlop }: Props): React.Node;
export declare function isEnabled(): boolean;
export {};
