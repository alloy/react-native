import { $ReadOnly } from "utility-types";
import { ElementRef, Ref } from "react";
declare type Args = $ReadOnly<{
    getForwardedRef: (() => Ref<any> | null | undefined);
    setLocalRef: ((ref: ElementRef<any>) => unknown);
}>;
/**
 * This is a helper function for when a component needs to be able to forward a ref
 * to a child component, but still needs to have access to that component as part of
 * its implementation.
 *
 * Its main use case is in wrappers for native components.
 *
 * Usage:
 *
 *   class MyView extends React.Component {
 *     _nativeRef = null;
 *
 *     _setNativeRef = setAndForwardRef({
 *       getForwardedRef: () => this.props.forwardedRef,
 *       setLocalRef: ref => {
 *         this._nativeRef = ref;
 *       },
 *     });
 *
 *     render() {
 *       return <View ref={this._setNativeRef} />;
 *     }
 *   }
 *
 *   const MyViewWithRef = React.forwardRef((props, ref) => (
 *     <MyView {...props} forwardedRef={ref} />
 *   ));
 *
 *   module.exports = MyViewWithRef;
 */
declare function setAndForwardRef({ getForwardedRef, setLocalRef }: Args): ((ref: ElementRef<any>) => void);
export default setAndForwardRef;
