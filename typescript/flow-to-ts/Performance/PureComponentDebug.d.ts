declare const React: any;
declare type DoNotCommitUsageOfPureComponentDebug = {};
/**
 * Identifies which prop or state changes triggered a re-render of a PureComponent. Usage:
 *
 * Change `extends React.PureComponent` to `extends PureComponentDebug` or inject it
 * everywhere by putting this line in your app setup:
 *
 *    React.PureComponent = require('PureComponentDebug');
 *
 * Should only be used for local testing, and will trigger a flow failure if you try to
 * commit any usages.
 */
declare class PureComponentDebug<P extends DoNotCommitUsageOfPureComponentDebug, S extends Object | null | undefined = void> extends React.Component<P, S> {
    shouldComponentUpdate(nextProps: P, nextState: S): boolean;
}
