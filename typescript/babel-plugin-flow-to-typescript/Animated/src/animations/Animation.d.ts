export declare type EndResult = {
    finished: boolean;
};
export declare type EndCallback = (result: EndResult) => void;
export declare type AnimationConfig = {
    isInteraction?: boolean;
    useNativeDriver: boolean;
    onComplete?: EndCallback | null;
    iterations?: number;
};
