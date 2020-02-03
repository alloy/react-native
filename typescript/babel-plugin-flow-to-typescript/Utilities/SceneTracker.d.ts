declare type Scene = {
    name: string;
};
declare let _listeners: Array<(scene: Scene) => void>;
declare let _activeScene: {
    name: string;
};
declare const SceneTracker: {
    setActiveScene(scene: Scene): void;
    getActiveScene(): Scene;
    addActiveSceneChangedListener(callback: (scene: Scene) => void): {
        remove: () => void;
    };
};
