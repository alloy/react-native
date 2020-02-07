require('promise');
const { foo, bar } = require('some-module');

function someFunction() {
    const baz = require('some-other-module');
    require('yet-another-module').foo(foo, bar, baz);
}
