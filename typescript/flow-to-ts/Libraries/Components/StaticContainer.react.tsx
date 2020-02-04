yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Components/StaticContainer.react.js
'use strict';
import { $ReadOnly } from "utility-types";












const React = require('react');

/**
 * Renders static content efficiently by allowing React to short-circuit the
 * reconciliation process. This component should be used when you know that a
 * subtree of components will never need to be updated.
 *
 *   const someValue = ...; // We know for certain this value will never change.
 *   return (
 *     <StaticContainer>
 *       <MyComponent value={someValue} />
 *     </StaticContainer>
 *   );
 *
 * Typically, you will not need to use this component and should opt for normal
 * React reconciliation.
 */
type Props = $ReadOnly<{
  /**
   * Whether or not this component should update.
   */
  shouldUpdate: boolean | null | undefined;

  /**
   * Content short-circuited by React reconciliation process.
   */
  children: React.ReactNode;
}>;
class StaticContainer extends React.Component<Props> {

  shouldComponentUpdate(nextProps: Props): boolean {
    return !!nextProps.shouldUpdate;
  }

  render(): null | React$Node {
    const child = this.props.children;
    return child === null || child === false ? null : React.Children.only(child);
  }
}

module.exports = StaticContainer;
Done in 0.48s.
