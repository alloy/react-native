'use strict';












const getDevServer = require('./getDevServer');

function openURLInBrowser(url: string) {
  fetch(getDevServer().url + 'open-url', {
    method: 'POST',
    body: JSON.stringify({ url })
  });
}

module.exports = openURLInBrowser;
