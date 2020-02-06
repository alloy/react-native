'use strict';;
// side-effectful require() to put fetch,
// Headers, Request, Response in global scope
import 'whatwg-fetch';

export default { fetch, Headers, Request, Response };
