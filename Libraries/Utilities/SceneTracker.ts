'use strict';












type Scene = {name: string;};

let _listeners: Array<(scene: Scene) => void> = [];

let _activeScene = { name: 'default' };

const SceneTracker = {
  setActiveScene(scene: Scene) {
    _activeScene = scene;
    _listeners.forEach(listener => listener(_activeScene));
  },

  getActiveScene(): Scene {
    return _activeScene;
  },

  addActiveSceneChangedListener(callback: (scene: Scene) => void): {remove: () => void;} {
    _listeners.push(callback);
    return {
      remove: () => {
        _listeners = _listeners.filter(listener => callback !== listener);
      }
    };
  }
};

module.exports = SceneTracker;