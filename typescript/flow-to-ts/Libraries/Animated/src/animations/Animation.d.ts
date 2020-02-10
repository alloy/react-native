import AnimatedValue from "../nodes/AnimatedValue";
export declare type EndResult = {
    finished: boolean;
};
export declare type EndCallback = ((result: EndResult) => void);
export declare type AnimationConfig = {
    isInteraction?: boolean;
    useNativeDriver: boolean;
    onComplete?: EndCallback | null | undefined;
    iterations?: number;
};
declare class Animation {
    __active: boolean;
    __isInteraction: boolean;
    __nativeId: number;
    __onEnd: EndCallback | null | undefined;
    __iterations: number;
    start(fromValue: number, onUpdate: ((value: number) => void), onEnd: EndCallback | null | undefined, previousAnimation: Animation | null | undefined, animatedValue: AnimatedValue): void;
    stop(): void;
    __getNativeAnimationConfig(): any;
    __debouncedOnEnd(result: EndResult): void;
    __startNativeAnimation(animatedValue: AnimatedValue): void;
}
export default Animation;
