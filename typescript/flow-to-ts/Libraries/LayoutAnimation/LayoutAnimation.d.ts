import { $ReadOnly } from "utility-types";
declare type Type = "spring" | "linear" | "easeInEaseOut" | "easeIn" | "easeOut" | "keyboard";
declare type Property = "opacity" | "scaleX" | "scaleY" | "scaleXY";
declare type AnimationConfig = $ReadOnly<{
    duration?: number;
    delay?: number;
    springDamping?: number;
    initialVelocity?: number;
    type?: Type;
    property?: Property;
}>;
export declare type LayoutAnimationConfig = $ReadOnly<{
    duration: number;
    create?: AnimationConfig;
    update?: AnimationConfig;
    delete?: AnimationConfig;
}>;
declare function configureNext(config: LayoutAnimationConfig, onAnimationDidEnd?: ((...args: any) => any)): void;
declare function create(duration: number, type: Type, property: Property): LayoutAnimationConfig;
/**
 * Automatically animates views to their new positions when the
 * next layout happens.
 *
 * A common way to use this API is to call it before calling `setState`.
 *
 * Note that in order to get this to work on **Android** you need to set the following flags via `UIManager`:
 *
 *     UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
 */
declare const LayoutAnimation: {
    /**
     * Schedules an animation to happen on the next layout.
     *
     * @param config Specifies animation properties:
     *
     *   - `duration` in milliseconds
     *   - `create`, `AnimationConfig` for animating in new views
     *   - `update`, `AnimationConfig` for animating views that have been updated
     *
     * @param onAnimationDidEnd Called when the animation finished.
     * Only supported on iOS.
     * @param onError Called on error. Only supported on iOS.
     */
    configureNext: typeof configureNext;
    /**
     * Helper for creating a config for `configureNext`.
     */
    create: typeof create;
    Types: Readonly<{
        spring: string;
        linear: string;
        easeInEaseOut: string;
        easeIn: string;
        easeOut: string;
        keyboard: string;
    }>;
    Properties: Readonly<{
        opacity: string;
        scaleX: string;
        scaleY: string;
        scaleXY: string;
    }>;
    checkConfig(...args: unknown[]): void;
    Presets: {
        easeInEaseOut: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            duration: number;
            create?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
                duration?: any;
                delay?: any;
                springDamping?: any;
                initialVelocity?: any;
                type?: any;
                property?: any;
            }> | undefined;
            update?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
                duration?: any;
                delay?: any;
                springDamping?: any;
                initialVelocity?: any;
                type?: any;
                property?: any;
            }> | undefined;
            delete?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
                duration?: any;
                delay?: any;
                springDamping?: any;
                initialVelocity?: any;
                type?: any;
                property?: any;
            }> | undefined;
        }>;
        linear: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
            duration: number;
            create?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
                duration?: any;
                delay?: any;
                springDamping?: any;
                initialVelocity?: any;
                type?: any;
                property?: any;
            }> | undefined;
            update?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
                duration?: any;
                delay?: any;
                springDamping?: any;
                initialVelocity?: any;
                type?: any;
                property?: any;
            }> | undefined;
            delete?: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
                duration?: any;
                delay?: any;
                springDamping?: any;
                initialVelocity?: any;
                type?: any;
                property?: any;
            }> | undefined;
        }>;
        spring: {
            duration: number;
            create: {
                type: string;
                property: string;
            };
            update: {
                type: string;
                springDamping: number;
            };
            delete: {
                type: string;
                property: string;
            };
        };
    };
    easeInEaseOut: (onAnimationDidEnd?: any) => void;
    linear: (onAnimationDidEnd?: any) => void;
    spring: (onAnimationDidEnd?: any) => void;
};
export default LayoutAnimation;
