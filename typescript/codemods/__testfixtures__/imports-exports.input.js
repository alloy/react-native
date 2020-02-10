require('promise');
const { foo, bar } = require('some-module');
const FooBar = require('default-export-single-var');

function someFunction() {
    let baz = require('some-other-module');
    baz = require('and-yet-another-module')(foo);
    require('yet-another-module').foo(foo, bar, baz);
    return require('and-yet-another-another-module');
}

module.exports = someFunction;
module.exports = { someFunction, get someFunction() {}, AliasedSomeFunction: someFunction };
