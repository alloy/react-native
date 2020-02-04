yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Core/Devtools/openURLInBrowser.js
'use strict';












const getDevServer = require('./getDevServer');

function openURLInBrowser(url: string) {
  fetch(getDevServer().url + 'open-url', {
    method: 'POST',
    body: JSON.stringify({ url })
  });
}

module.exports = openURLInBrowser;
Done in 0.47s.
