import 'promise';
import _Import0 from 'some-module';
import _Import1 from 'some-other-module';
import _Import2 from 'and-yet-another-module';
import _Import3 from 'yet-another-module';
import _Import4 from 'and-yet-another-another-module';
;
const { foo, bar } = _Import0;

function someFunction() {
    let baz = _Import1;
    baz = _Import2(foo);
    _Import3.foo(foo, bar, baz);
    return _Import4;
}

export default someFunction;;
export default { someFunction, get someFunction() {}, AliasedSomeFunction: someFunction };;
