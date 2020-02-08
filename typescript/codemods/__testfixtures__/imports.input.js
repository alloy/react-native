require('promise');
const { foo, bar } = require('some-module');

function someFunction() {
    const baz = require('some-other-module');
    require('yet-another-module').foo(foo, bar, baz);
    return require('and-yet-another-module');
}

module.exports = someFunction;
module.exports = { someFunction };
module.exports = { get someFunction() {} };
