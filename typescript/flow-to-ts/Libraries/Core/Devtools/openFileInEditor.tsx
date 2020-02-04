yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/Devtools/openFileInEditor.js
'use strict';












const getDevServer = require('./getDevServer');

function openFileInEditor(file: string, lineNumber: number) {
  fetch(getDevServer().url + 'open-stack-frame', {
    method: 'POST',
    body: JSON.stringify({ file, lineNumber })
  });
}

module.exports = openFileInEditor;
Done in 0.55s.
