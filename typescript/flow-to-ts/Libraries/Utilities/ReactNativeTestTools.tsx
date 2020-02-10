'use strict';;
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import _Import0 from 'react-native';
const shallowRenderer = new ShallowRenderer();

const {
  Switch,
  Text,
  TextInput,
  View,
  VirtualizedList
} = _Import0;

import { ReactTestInstance, ReactTestRendererNode, Predicate } from "react-test-renderer";

function byClickable(): Predicate {
  return null as any;
}

function byTestID(testID: string): Predicate {
  return null as any;
}

function byTextMatching(regex: RegExp): Predicate {
  return null as any;
}

function enter(instance: ReactTestInstance, text: string) {
  const input = instance.findByType(TextInput);
  input.props.onChange && input.props.onChange({ nativeEvent: { text } });
  input.props.onChangeText && input.props.onChangeText(text);
}

// Returns null if there is no error, otherwise returns an error message string.
function maximumDepthError(tree: {toJSON: (() => ReactTestRendererNode);}, maxDepthLimit: number): string | null | undefined {
  return null as any;
}

function expectNoConsoleWarn() {
  (jest as $FlowFixMe).spyOn(console, 'warn').mockImplementation((...args) => {
    expect(args).toBeFalsy();
  });
}

function expectNoConsoleError() {
  let hasNotFailed = true;
  (jest as $FlowFixMe).spyOn(console, 'error').mockImplementation((...args) => {
    if (hasNotFailed) {
      hasNotFailed = false; // set false to prevent infinite recursion
      expect(args).toBeFalsy();
    }
  });
}

function expectRendersMatchingSnapshot(name: string, ComponentProvider: (() => React.ReactElement<any>), unmockComponent: (() => unknown)) {
  let instance;

  jest.resetAllMocks();

  instance = ReactTestRenderer.create(<ComponentProvider />);
  expect(instance).toMatchSnapshot('should deep render when mocked (please verify output manually)');

  jest.resetAllMocks();
  unmockComponent();

  instance = shallowRenderer.render(<ComponentProvider />);
  expect(instance).toMatchSnapshot(`should shallow render as <${name} /> when not mocked`);

  jest.resetAllMocks();

  instance = shallowRenderer.render(<ComponentProvider />);
  expect(instance).toMatchSnapshot(`should shallow render as <${name} /> when mocked`);

  jest.resetAllMocks();
  unmockComponent();

  instance = ReactTestRenderer.create(<ComponentProvider />);
  expect(instance).toMatchSnapshot('should deep render when not mocked (please verify output manually)');
}

// Takes a node from toJSON()
function maximumDepthOfJSON(node: ReactTestRendererNode): number {
  return null as any;
}

function renderAndEnforceStrictMode(element: React.ReactNode): any {
  return null as any;
}

function renderWithStrictMode(element: React.ReactNode): any {
  return null as any;
}

function tap(instance: ReactTestInstance) {
  const touchable = instance.find(byClickable());
  if (touchable.type === Text && touchable.props && touchable.props.onPress) {
    touchable.props.onPress();
  } else if (touchable.type === Switch && touchable.props) {
    const value = !touchable.props.value;
    const {
      onChange,
      onValueChange
    } = touchable.props;
    onChange && onChange({ nativeEvent: { value } });
    onValueChange && onValueChange(value);
  } else if (touchable?.props?.onStartShouldSetResponder?.testOnly_pressabilityConfig) {
    const {
      onPress,
      disabled
    } = touchable.props.onStartShouldSetResponder.testOnly_pressabilityConfig();
    if (!disabled) {
      onPress({ nativeEvent: {} });
    }
  } else {
    // Only tap when props.disabled isn't set (or there aren't any props)
    if (!touchable.props || !touchable.props.disabled) {
      touchable.props.onPress({ nativeEvent: {} });
    }
  }
}

function scrollToBottom(instance: ReactTestInstance) {
  const list = instance.findByType(VirtualizedList);
  list.props && list.props.onEndReached();
}

// To make error messages a little bit better, we attach a custom toString
// implementation to a predicate
function withMessage(fn: Predicate, message: string): Predicate {
  return null as any;
}

export { byClickable };
export { byTestID };
export { byTextMatching };
export { enter };
export { expectNoConsoleWarn };
export { expectNoConsoleError };
export { expectRendersMatchingSnapshot };
export { maximumDepthError };
export { maximumDepthOfJSON };
export { renderAndEnforceStrictMode };
export { renderWithStrictMode };
export { scrollToBottom };
export { tap };
export { withMessage };
