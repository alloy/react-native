import { EndCallback } from './animations/Animation';
/**
 * Animations are a source of flakiness in snapshot testing. This mock replaces
 * animation functions from AnimatedImplementation with empty animations for
 * predictability in tests.
 */
export declare type CompositeAnimation = {
    start: (callback?: EndCallback | null) => void;
    stop: () => void;
    reset: () => void;
    _startNativeLoop: (iterations?: number) => void;
    _isUsingNativeDriver: () => boolean;
};
