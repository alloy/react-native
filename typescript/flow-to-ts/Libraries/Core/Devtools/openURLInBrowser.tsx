'use strict';;
import getDevServer from './getDevServer';

function openURLInBrowser(url: string) {
  fetch(getDevServer().url + 'open-url', {
    method: 'POST',
    body: JSON.stringify({ url })
  });
}

export default openURLInBrowser;
