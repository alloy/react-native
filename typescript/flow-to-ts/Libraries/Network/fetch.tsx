'use strict';













// side-effectful require() to put fetch,
// Headers, Request, Response in global scope
require('whatwg-fetch');

module.exports = { fetch, Headers, Request, Response };
