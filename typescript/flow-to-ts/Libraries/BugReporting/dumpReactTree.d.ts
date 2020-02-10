/**
 * Dump all React Native root views and their content. This function tries
 * it best to get the content but ultimately relies on implementation details
 * of React and will fail in future versions.
 */
declare function dumpReactTree(): string;
export default dumpReactTree;
