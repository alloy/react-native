'use strict';;
import _Import0 from '../Utilities/PolyfillFunctions';
import _Import1 from '../Network/XMLHttpRequest';
import _Import2 from '../Network/FormData';
import _Import3 from '../Network/fetch';
import _Import4 from '../Network/fetch';
import _Import5 from '../Network/fetch';
import _Import6 from '../Network/fetch';
import _Import7 from '../WebSocket/WebSocket';
import _Import8 from '../Blob/Blob';
import _Import9 from '../Blob/File';
import _Import10 from '../Blob/FileReader';
import _Import11 from '../Blob/URL';
import _Import12 from '../Blob/URL';
import _Import13 from 'abort-controller/dist/abort-controller';
import _Import14 from 'abort-controller/dist/abort-controller';












const {
  polyfillGlobal
} = _Import0;

/**
 * Set up XMLHttpRequest. The native XMLHttpRequest in Chrome dev tools is CORS
 * aware and won't let you fetch anything from the internet.
 *
 * You can use this module directly, or just require InitializeCore.
 */
polyfillGlobal('XMLHttpRequest', () => _Import1);
polyfillGlobal('FormData', () => _Import2);

polyfillGlobal('fetch', () => _Import3.fetch); // flowlint-line untyped-import:off
polyfillGlobal('Headers', () => _Import4.Headers); // flowlint-line untyped-import:off
polyfillGlobal('Request', () => _Import5.Request); // flowlint-line untyped-import:off
polyfillGlobal('Response', () => _Import6.Response); // flowlint-line untyped-import:off
polyfillGlobal('WebSocket', () => _Import7);
polyfillGlobal('Blob', () => _Import8);
polyfillGlobal('File', () => _Import9);
polyfillGlobal('FileReader', () => _Import10);
polyfillGlobal('URL', () => _Import11.URL); // flowlint-line untyped-import:off
polyfillGlobal('URLSearchParams', () => _Import12.URLSearchParams); // flowlint-line untyped-import:off
polyfillGlobal('AbortController', () => _Import13.AbortController // flowlint-line untyped-import:off
);
polyfillGlobal('AbortSignal', () => _Import14.AbortSignal // flowlint-line untyped-import:off
);
