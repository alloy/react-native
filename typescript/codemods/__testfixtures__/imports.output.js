import 'promise';
import { foo, bar } from 'some-module';
import _Import0 from 'some-other-module';
import _Import1 from 'yet-another-module';
import _Import2 from 'and-yet-another-module';
;

function someFunction() {
    const baz = _Import0;
    _Import1.foo(foo, bar, baz);
    return _Import2;
}

export default someFunction;;
export { someFunction };;
export default { get someFunction() {} };;
