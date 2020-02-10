import 'promise';
import { foo, bar } from 'some-module';
import _Import0 from 'some-other-module';
import _Import1 from 'and-yet-another-module';
import _Import2 from 'yet-another-module';
import _Import3 from 'and-yet-another-another-module';
;

function someFunction() {
    let baz = _Import0;
    baz = _Import1(foo);
    _Import2.foo(foo, bar, baz);
    return _Import3;
}

export default someFunction;;
export { someFunction, someFunction as AliasedSomeFunction };;
export default { get someFunction() {}, AliasedSomeFunction: someFunction };;
