import 'promise';
import _Import0 from 'some-module';
import FooBar from 'default-export-single-var';
import _Import1 from 'assignment-with-non-default-expression';
import ExplicitDefaultUsage from 'explicit-default-usage';
import _Import2 from 'some-other-module';
import _Import3 from 'and-yet-another-module';
import _Import4 from 'yet-another-module';
import _Import5 from 'and-yet-another-another-module';
;
const { foo, bar } = _Import0;

const AssignmentWithNonDefaultExpression = _Import1.foo;

function someFunction() {
    let baz = _Import2;
    baz = _Import3(foo);
    _Import4.foo(foo, bar, baz);
    return _Import5;
}

export default someFunction;;
export default { someFunction, get someFunction() {}, AliasedSomeFunction: someFunction };;
