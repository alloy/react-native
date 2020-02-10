declare type SpringConfigType = {
    stiffness: number;
    damping: number;
};
declare function fromOrigamiTensionAndFriction(tension: number, friction: number): SpringConfigType;
declare function fromBouncinessAndSpeed(bounciness: number, speed: number): SpringConfigType;
declare const _default: {
    fromOrigamiTensionAndFriction: typeof fromOrigamiTensionAndFriction;
    fromBouncinessAndSpeed: typeof fromBouncinessAndSpeed;
};
export default _default;
