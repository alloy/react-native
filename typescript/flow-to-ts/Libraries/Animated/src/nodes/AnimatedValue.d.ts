import AnimatedInterpolation from './AnimatedInterpolation';
import AnimatedWithChildren from './AnimatedWithChildren';
import Animation, { EndCallback } from "../animations/Animation";
import { InterpolationConfigType } from "./AnimatedInterpolation";
import AnimatedTracking from "./AnimatedTracking";
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 *
 * See http://facebook.github.io/react-native/docs/animatedvalue.html
 */
declare class AnimatedValue extends AnimatedWithChildren {
    _value: number;
    _startingValue: number;
    _offset: number;
    _animation: Animation | null | undefined;
    _tracking: AnimatedTracking | null | undefined;
    constructor(value: number);
    __detach(): void;
    __getValue(): number;
    /**
     * Directly set the value.  This will stop any animations running on the value
     * and update all the bound properties.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#setvalue
     */
    setValue(value: number): void;
    /**
     * Sets an offset that is applied on top of whatever value is set, whether via
     * `setValue`, an animation, or `Animated.event`.  Useful for compensating
     * things like the start of a pan gesture.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#setoffset
     */
    setOffset(offset: number): void;
    /**
     * Merges the offset value into the base value and resets the offset to zero.
     * The final output of the value is unchanged.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#flattenoffset
     */
    flattenOffset(): void;
    /**
     * Sets the offset value to the base value, and resets the base value to zero.
     * The final output of the value is unchanged.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#extractoffset
     */
    extractOffset(): void;
    /**
     * Stops any running animation or tracking. `callback` is invoked with the
     * final value after stopping the animation, which is useful for updating
     * state to match the animation position with layout.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#stopanimation
     */
    stopAnimation(callback?: ((value: number) => void) | null | undefined): void;
    /**
     * Stops any animation and resets the value to its original.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#resetanimation
     */
    resetAnimation(callback?: ((value: number) => void) | null | undefined): void;
    _onAnimatedValueUpdateReceived(value: number): void;
    /**
     * Interpolates the value before updating the property, e.g. mapping 0-1 to
     * 0-10.
     */
    interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    /**
     * Typically only used internally, but could be used by a custom Animation
     * class.
     *
     * See http://facebook.github.io/react-native/docs/animatedvalue.html#animate
     */
    animate(animation: Animation, callback: EndCallback | null | undefined): void;
    /**
     * Typically only used internally.
     */
    stopTracking(): void;
    /**
     * Typically only used internally.
     */
    track(tracking: AnimatedTracking): void;
    _updateValue(value: number, flush: boolean): void;
    __getNativeConfig(): any;
}
export default AnimatedValue;
