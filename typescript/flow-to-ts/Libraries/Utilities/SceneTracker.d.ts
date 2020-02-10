export declare type Scene = {
    name: string;
};
declare const SceneTracker: {
    setActiveScene(scene: Scene): void;
    getActiveScene(): Scene;
    addActiveSceneChangedListener(callback: (scene: Scene) => void): {
        remove: () => void;
    };
};
export default SceneTracker;
