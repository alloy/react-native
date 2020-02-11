import Foo from 'some-module';
import Bar, { Baz } from 'some-other-module';

function foo(): number {
    const x = 21;
    Foo();
    return x * 2;
}

function bar(): void {
    Baz();
    const x = 21;
}

const x = {
    get AccessibilityInfo(): AccessibilityInfo {
        return AccessibilityInfo;
    },
}

Bar();
