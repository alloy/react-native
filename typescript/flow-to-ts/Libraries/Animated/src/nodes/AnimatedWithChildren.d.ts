import AnimatedNode from './AnimatedNode';
declare class AnimatedWithChildren extends AnimatedNode {
    _children: Array<AnimatedNode>;
    constructor();
    __makeNative(): void;
    __addChild(child: AnimatedNode): void;
    __removeChild(child: AnimatedNode): void;
    __getChildren(): Array<AnimatedNode>;
    __callListeners(value: number): void;
}
export default AnimatedWithChildren;
