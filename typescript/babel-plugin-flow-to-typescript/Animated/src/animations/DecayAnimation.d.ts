import { AnimationConfig } from './Animation';
export declare type DecayAnimationConfig = AnimationConfig & {
    velocity: number | {
        x: number;
        y: number;
    };
    deceleration?: number;
};
export declare type DecayAnimationConfigSingle = AnimationConfig & {
    velocity: number;
    deceleration?: number;
};
