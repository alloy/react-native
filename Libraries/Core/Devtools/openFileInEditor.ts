'use strict';












const getDevServer = require('./getDevServer');

function openFileInEditor(file: string, lineNumber: number) {
  fetch(getDevServer().url + 'open-stack-frame', {
    method: 'POST',
    body: JSON.stringify({ file, lineNumber })
  });
}

module.exports = openFileInEditor;