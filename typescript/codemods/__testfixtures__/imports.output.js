import { foo, bar } from 'some-module';
import _Import0 from 'some-other-module';
import _Import1 from 'yet-another-module';

function someFunction() {
    const baz = _Import0;
    _Import1.foo(foo, bar, baz);
}

export { someFunction };
export default someFunction;
