import AnimatedValue from './AnimatedValue';
import AnimatedNode from './AnimatedNode';
import { EndCallback } from "../animations/Animation";
declare class AnimatedTracking extends AnimatedNode {
    _value: AnimatedValue;
    _parent: AnimatedNode;
    _callback: EndCallback | null | undefined;
    _animationConfig: any;
    _animationClass: any;
    _useNativeDriver: boolean;
    constructor(value: AnimatedValue, parent: AnimatedNode, animationClass: any, animationConfig: any, callback?: EndCallback | null | undefined);
    __makeNative(): void;
    __getValue(): any;
    __attach(): void;
    __detach(): void;
    update(): void;
    __getNativeConfig(): any;
}
export default AnimatedTracking;
