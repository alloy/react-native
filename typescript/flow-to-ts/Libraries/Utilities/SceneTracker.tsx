yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/SceneTracker.js
'use strict';












export type Scene = {name: string;};

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
Done in 0.50s.
