import { $ReadOnly } from "utility-types";
import * as React from "react";
declare type Props = $ReadOnly<{
    color: string;
    hitSlop: $ReadOnly<{
        bottom?: number | null | undefined;
        left?: number | null | undefined;
        right?: number | null | undefined;
        top?: number | null | undefined;
    }> | null | undefined;
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
export declare function PressabilityDebugView({ color, hitSlop }: Props): React.ReactNode;
export declare function isEnabled(): boolean;
export {};
