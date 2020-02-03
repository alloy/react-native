declare type SpringConfigType = {
    stiffness: number;
    damping: number;
};
declare function stiffnessFromOrigamiValue(oValue: any): number;
declare function dampingFromOrigamiValue(oValue: any): number;
declare function fromOrigamiTensionAndFriction(tension: number, friction: number): SpringConfigType;
declare function fromBouncinessAndSpeed(bounciness: number, speed: number): SpringConfigType;
