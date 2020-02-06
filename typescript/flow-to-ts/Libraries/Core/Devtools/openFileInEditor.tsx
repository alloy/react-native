'use strict';;
import getDevServer from './getDevServer';

function openFileInEditor(file: string, lineNumber: number) {
  fetch(getDevServer().url + 'open-stack-frame', {
    method: 'POST',
    body: JSON.stringify({ file, lineNumber })
  });
}

export default openFileInEditor;
