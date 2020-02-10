import React from 'react';
import { $ReadOnly } from "utility-types";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { DirectEventHandler } from "../../Types/CodegenTypes";
import { MeasureOnSuccessCallback, MeasureInWindowOnSuccessCallback, MeasureLayoutOnSuccessCallback } from "../../Renderer/shims/ReactNativeTypes";
declare type DrawerStates = "Idle" | "Dragging" | "Settling";
declare type DrawerSlideEvent = $ReadOnly<{
    offset: number;
}>;
declare type Props = $ReadOnly<{
    /**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *   - 'none' (the default), drags do not dismiss the keyboard.
     *   - 'on-drag', the keyboard is dismissed when a drag begins.
     */
    keyboardDismissMode?: ("none" | "on-drag") | null | undefined;
    /**
     * Specifies the background color of the drawer. The default value is white.
     * If you want to set the opacity of the drawer, use rgba. Example:
     *
     * ```
     * return (
     *   <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">
     *   </DrawerLayoutAndroid>
     * );
     * ```
     */
    drawerBackgroundColor: ColorValue;
    /**
     * Specifies the side of the screen from which the drawer will slide in.
     */
    drawerPosition: ("left" | "right") | null | undefined;
    /**
     * Specifies the width of the drawer, more precisely the width of the view that be pulled in
     * from the edge of the window.
     */
    drawerWidth?: number | null | undefined;
    /**
     * Specifies the lock mode of the drawer. The drawer can be locked in 3 states:
     * - unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
     * - locked-closed, meaning that the drawer will stay closed and not respond to gestures.
     * - locked-open, meaning that the drawer will stay opened and not respond to gestures.
     * The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).
     */
    drawerLockMode?: ("unlocked" | "locked-closed" | "locked-open") | null | undefined;
    /**
     * Function called whenever there is an interaction with the navigation view.
     */
    onDrawerSlide?: DirectEventHandler<DrawerSlideEvent> | null | undefined;
    /**
     * Function called when the drawer state has changed. The drawer can be in 3 states:
     * - Idle, meaning there is no interaction with the navigation view happening at the time
     * - Dragging, meaning there is currently an interaction with the navigation view
     * - Settling, meaning that there was an interaction with the navigation view, and the
     * navigation view is now finishing its closing or opening animation
     */
    onDrawerStateChanged?: ((state: DrawerStates) => unknown) | null | undefined;
    /**
     * Function called whenever the navigation view has been opened.
     */
    onDrawerOpen?: (() => unknown) | null | undefined;
    /**
     * Function called whenever the navigation view has been closed.
     */
    onDrawerClose?: (() => unknown) | null | undefined;
    /**
     * The navigation view that will be rendered to the side of the screen and can be pulled in.
     */
    renderNavigationView: (() => React.ReactElement<any>);
    /**
     * Make the drawer take the entire screen and draw the background of the
     * status bar to allow it to open over the status bar. It will only have an
     * effect on API 21+.
     */
    statusBarBackgroundColor?: ColorValue | null | undefined;
    children?: React.ReactNode;
    style?: ViewStyleProp | null | undefined;
}>;
declare type State = {
    statusBarBackgroundColor: ColorValue;
};
/**
 * React component that wraps the platform `DrawerLayout` (Android only). The
 * Drawer (typically used for navigation) is rendered with `renderNavigationView`
 * and direct children are the main view (where your content goes). The navigation
 * view is initially not visible on the screen, but can be pulled in from the
 * side of the window specified by the `drawerPosition` prop and its width can
 * be set by the `drawerWidth` prop.
 *
 * Example:
 *
 * ```
 * render: function() {
 *   var navigationView = (
 *     <View style={{flex: 1, backgroundColor: '#fff'}}>
 *       <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
 *     </View>
 *   );
 *   return (
 *     <DrawerLayoutAndroid
 *       drawerWidth={300}
 *       drawerPosition="left"
 *       renderNavigationView={() => navigationView}>
 *       <View style={{flex: 1, alignItems: 'center'}}>
 *         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
 *         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
 *       </View>
 *     </DrawerLayoutAndroid>
 *   );
 * },
 * ```
 */
declare class DrawerLayoutAndroid extends React.Component<Props, State> {
    static get positions(): unknown;
    static defaultProps: {
        drawerBackgroundColor: "white";
    };
    _nativeRef: React.RefObject<any>;
    state: State;
    render(): React.ReactNode;
    _onDrawerSlide: (event: any) => void;
    _onDrawerOpen: () => void;
    _onDrawerClose: () => void;
    _onDrawerStateChanged: (event: any) => void;
    /**
     * Opens the drawer.
     */
    openDrawer(): void;
    /**
     * Closes the drawer.
     */
    closeDrawer(): void;
    /**
     * Closing and opening example
     * Note: To access the drawer you have to give it a ref
     *
     * Class component:
     *
     * render () {
     *   this.openDrawer = () => {
     *     this.refs.DRAWER.openDrawer()
     *   }
     *   this.closeDrawer = () => {
     *     this.refs.DRAWER.closeDrawer()
     *   }
     *   return (
     *     <DrawerLayoutAndroid ref={'DRAWER'}>
     *      {children}
     *     </DrawerLayoutAndroid>
     *   )
     * }
     *
     * Function component:
     *
     * const drawerRef = useRef()
     * const openDrawer = () => {
     *   drawerRef.current.openDrawer()
     * }
     * const closeDrawer = () => {
     *   drawerRef.current.closeDrawer()
     * }
     * return (
     *   <DrawerLayoutAndroid ref={drawerRef}>
     *     {children}
     *   </DrawerLayoutAndroid>
     * )
     */
    /**
     * Native methods
     */
    blur(): void;
    focus(): void;
    measure(callback: MeasureOnSuccessCallback): void;
    measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
    measureLayout(relativeToNativeNode: number, onSuccess: MeasureLayoutOnSuccessCallback, onFail?: (() => void)): void;
    setNativeProps(nativeProps: any): void;
}
export default DrawerLayoutAndroid;
