import { PressEvent } from '../Types/CoreEventTypes';
declare type $Call1<F extends (...args: any) => any, A> = F extends (a: A, ...args: any) => infer R ? R : never;
/**
 * `PanResponder` reconciles several touches into a single gesture. It makes
 * single-touch gestures resilient to extra touches, and can be used to
 * recognize simple multi-touch gestures.
 *
 * By default, `PanResponder` holds an `InteractionManager` handle to block
 * long-running JS events from interrupting active gestures.
 *
 * It provides a predictable wrapper of the responder handlers provided by the
 * [gesture responder system](docs/gesture-responder-system.html).
 * For each handler, it provides a new `gestureState` object alongside the
 * native event object:
 *
 * ```
 * onPanResponderMove: (event, gestureState) => {}
 * ```
 *
 * A native event is a synthetic touch event with the following form:
 *
 *  - `nativeEvent`
 *      + `changedTouches` - Array of all touch events that have changed since the last event
 *      + `identifier` - The ID of the touch
 *      + `locationX` - The X position of the touch, relative to the element
 *      + `locationY` - The Y position of the touch, relative to the element
 *      + `pageX` - The X position of the touch, relative to the root element
 *      + `pageY` - The Y position of the touch, relative to the root element
 *      + `target` - The node id of the element receiving the touch event
 *      + `timestamp` - A time identifier for the touch, useful for velocity calculation
 *      + `touches` - Array of all current touches on the screen
 *
 * A `gestureState` object has the following:
 *
 *  - `stateID` - ID of the gestureState- persisted as long as there at least
 *     one touch on screen
 *  - `moveX` - the latest screen coordinates of the recently-moved touch
 *  - `moveY` - the latest screen coordinates of the recently-moved touch
 *  - `x0` - the screen coordinates of the responder grant
 *  - `y0` - the screen coordinates of the responder grant
 *  - `dx` - accumulated distance of the gesture since the touch started
 *  - `dy` - accumulated distance of the gesture since the touch started
 *  - `vx` - current velocity of the gesture
 *  - `vy` - current velocity of the gesture
 *  - `numberActiveTouches` - Number of touches currently on screen
 *
 * ### Basic Usage
 *
 * ```
 *   componentWillMount: function() {
 *     this._panResponder = PanResponder.create({
 *       // Ask to be the responder:
 *       onStartShouldSetPanResponder: (evt, gestureState) => true,
 *       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
 *       onMoveShouldSetPanResponder: (evt, gestureState) => true,
 *       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
 *
 *       onPanResponderGrant: (evt, gestureState) => {
 *         // The gesture has started. Show visual feedback so the user knows
 *         // what is happening!
 *
 *         // gestureState.d{x,y} will be set to zero now
 *       },
 *       onPanResponderMove: (evt, gestureState) => {
 *         // The most recent move distance is gestureState.move{X,Y}
 *
 *         // The accumulated gesture distance since becoming responder is
 *         // gestureState.d{x,y}
 *       },
 *       onPanResponderTerminationRequest: (evt, gestureState) => true,
 *       onPanResponderRelease: (evt, gestureState) => {
 *         // The user has released all touches while this view is the
 *         // responder. This typically means a gesture has succeeded
 *       },
 *       onPanResponderTerminate: (evt, gestureState) => {
 *         // Another component has become the responder, so this gesture
 *         // should be cancelled
 *       },
 *       onShouldBlockNativeResponder: (evt, gestureState) => {
 *         // Returns whether this component should block native components from becoming the JS
 *         // responder. Returns true by default. Is currently only supported on android.
 *         return true;
 *       },
 *     });
 *   },
 *
 *   render: function() {
 *     return (
 *       <View {...this._panResponder.panHandlers} />
 *     );
 *   },
 *
 * ```
 *
 * ### Working Example
 *
 * To see it in action, try the
 * [PanResponder example in RNTester](https://github.com/facebook/react-native/blob/master/RNTester/js/PanResponderExample.js)
 */
export declare type GestureState = {
    /**
     * ID of the gestureState - persisted as long as there at least one touch on screen
     */
    stateID: number;
    /**
     * The latest screen coordinates of the recently-moved touch
     */
    moveX: number;
    /**
     * The latest screen coordinates of the recently-moved touch
     */
    moveY: number;
    /**
     * The screen coordinates of the responder grant
     */
    x0: number;
    /**
     * The screen coordinates of the responder grant
     */
    y0: number;
    /**
     * Accumulated distance of the gesture since the touch started
     */
    dx: number;
    /**
     * Accumulated distance of the gesture since the touch started
     */
    dy: number;
    /**
     * Current velocity of the gesture
     */
    vx: number;
    /**
     * Current velocity of the gesture
     */
    vy: number;
    /**
     * Number of touches currently on screen
     */
    numberActiveTouches: number;
    /**
     * All `gestureState` accounts for timeStamps up until this value
     *
     * @private
     */
    _accountsForMovesUpTo: number;
};
declare type ActiveCallback = (event: PressEvent, gestureState: GestureState) => boolean;
declare type PassiveCallback = (event: PressEvent, gestureState: GestureState) => unknown;
declare type PanResponderConfig = Readonly<{
    onMoveShouldSetPanResponder?: ActiveCallback | null;
    onMoveShouldSetPanResponderCapture?: ActiveCallback | null;
    onStartShouldSetPanResponder?: ActiveCallback | null;
    onStartShouldSetPanResponderCapture?: ActiveCallback | null;
    /**
     * The body of `onResponderGrant` returns a bool, but the vast majority of
     * callsites return void and this TODO notice is found in it:
     *   TODO: t7467124 investigate if this can be removed
     */
    onPanResponderGrant?: (PassiveCallback | ActiveCallback) | null;
    onPanResponderReject?: PassiveCallback | null;
    onPanResponderStart?: PassiveCallback | null;
    onPanResponderEnd?: PassiveCallback | null;
    onPanResponderRelease?: PassiveCallback | null;
    onPanResponderMove?: PassiveCallback | null;
    onPanResponderTerminate?: PassiveCallback | null;
    onPanResponderTerminationRequest?: ActiveCallback | null;
    onShouldBlockNativeResponder?: ActiveCallback | null;
}>;
declare const PanResponder: {
    /**
     *
     * A graphical explanation of the touch data flow:
     *
     * +----------------------------+             +--------------------------------+
     * | ResponderTouchHistoryStore |             |TouchHistoryMath                |
     * +----------------------------+             +----------+---------------------+
     * |Global store of touchHistory|             |Allocation-less math util       |
     * |including activeness, start |             |on touch history (centroids     |
     * |position, prev/cur position.|             |and multitouch movement etc)    |
     * |                            |             |                                |
     * +----^-----------------------+             +----^---------------------------+
     *      |                                          |
     *      | (records relevant history                |
     *      |  of touches relevant for                 |
     *      |  implementing higher level               |
     *      |  gestures)                               |
     *      |                                          |
     * +----+-----------------------+             +----|---------------------------+
     * | ResponderEventPlugin       |             |    |   Your App/Component      |
     * +----------------------------+             +----|---------------------------+
     * |Negotiates which view gets  | Low level   |    |             High level    |
     * |onResponderMove events.     | events w/   |  +-+-------+     events w/     |
     * |Also records history into   | touchHistory|  |   Pan   |     multitouch +  |
     * |ResponderTouchHistoryStore. +---------------->Responder+-----> accumulative|
     * +----------------------------+ attached to |  |         |     distance and  |
     *                                 each event |  +---------+     velocity.     |
     *                                            |                                |
     *                                            |                                |
     *                                            +--------------------------------+
     *
     *
     *
     * Gesture that calculates cumulative movement over time in a way that just
     * "does the right thing" for multiple touches. The "right thing" is very
     * nuanced. When moving two touches in opposite directions, the cumulative
     * distance is zero in each dimension. When two touches move in parallel five
     * pixels in the same direction, the cumulative distance is five, not ten. If
     * two touches start, one moves five in a direction, then stops and the other
     * touch moves fives in the same direction, the cumulative distance is ten.
     *
     * This logic requires a kind of processing of time "clusters" of touch events
     * so that two touch moves that essentially occur in parallel but move every
     * other frame respectively, are considered part of the same movement.
     *
     * Explanation of some of the non-obvious fields:
     *
     * - moveX/moveY: If no move event has been observed, then `(moveX, moveY)` is
     *   invalid. If a move event has been observed, `(moveX, moveY)` is the
     *   centroid of the most recently moved "cluster" of active touches.
     *   (Currently all move have the same timeStamp, but later we should add some
     *   threshold for what is considered to be "moving"). If a palm is
     *   accidentally counted as a touch, but a finger is moving greatly, the palm
     *   will move slightly, but we only want to count the single moving touch.
     * - x0/y0: Centroid location (non-cumulative) at the time of becoming
     *   responder.
     * - dx/dy: Cumulative touch distance - not the same thing as sum of each touch
     *   distance. Accounts for touch moves that are clustered together in time,
     *   moving the same direction. Only valid when currently responder (otherwise,
     *   it only represents the drag distance below the threshold).
     * - vx/vy: Velocity.
     */
    _initializeGestureState(gestureState: GestureState): void;
    /**
     * This is nuanced and is necessary. It is incorrect to continuously take all
     * active *and* recently moved touches, find the centroid, and track how that
     * result changes over time. Instead, we must take all recently moved
     * touches, and calculate how the centroid has changed just for those
     * recently moved touches, and append that change to an accumulator. This is
     * to (at least) handle the case where the user is moving three fingers, and
     * then one of the fingers stops but the other two continue.
     *
     * This is very different than taking all of the recently moved touches and
     * storing their centroid as `dx/dy`. For correctness, we must *accumulate
     * changes* in the centroid of recently moved touches.
     *
     * There is also some nuance with how we handle multiple moved touches in a
     * single event. With the way `ReactNativeEventEmitter` dispatches touches as
     * individual events, multiple touches generate two 'move' events, each of
     * them triggering `onResponderMove`. But with the way `PanResponder` works,
     * all of the gesture inference is performed on the first dispatch, since it
     * looks at all of the touches (even the ones for which there hasn't been a
     * native dispatch yet). Therefore, `PanResponder` does not call
     * `onResponderMove` passed the first dispatch. This diverges from the
     * typical responder callback pattern (without using `PanResponder`), but
     * avoids more dispatches than necessary.
     */
    _updateGestureStateOnMove(gestureState: GestureState, touchHistory: any): void;
    /**
     * @param {object} config Enhanced versions of all of the responder callbacks
     * that provide not only the typical `ResponderSyntheticEvent`, but also the
     * `PanResponder` gesture state.  Simply replace the word `Responder` with
     * `PanResponder` in each of the typical `onResponder*` callbacks. For
     * example, the `config` object would look like:
     *
     *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
     *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
     *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
     *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
     *  - `onPanResponderReject: (e, gestureState) => {...}`
     *  - `onPanResponderGrant: (e, gestureState) => {...}`
     *  - `onPanResponderStart: (e, gestureState) => {...}`
     *  - `onPanResponderEnd: (e, gestureState) => {...}`
     *  - `onPanResponderRelease: (e, gestureState) => {...}`
     *  - `onPanResponderMove: (e, gestureState) => {...}`
     *  - `onPanResponderTerminate: (e, gestureState) => {...}`
     *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
     *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
     *
     *  In general, for events that have capture equivalents, we update the
     *  gestureState once in the capture phase and can use it in the bubble phase
     *  as well.
     *
     *  Be careful with onStartShould* callbacks. They only reflect updated
     *  `gestureState` for start/end events that bubble/capture to the Node.
     *  Once the node is the responder, you can rely on every start/end event
     *  being processed by the gesture and `gestureState` being updated
     *  accordingly. (numberActiveTouches) may not be totally accurate unless you
     *  are the responder.
     */
    create(config: Readonly<{
        onMoveShouldSetPanResponder?: ActiveCallback;
        onMoveShouldSetPanResponderCapture?: ActiveCallback;
        onStartShouldSetPanResponder?: ActiveCallback;
        onStartShouldSetPanResponderCapture?: ActiveCallback;
        /**
         * The body of `onResponderGrant` returns a bool, but the vast majority of
         * callsites return void and this TODO notice is found in it:
         *   TODO: t7467124 investigate if this can be removed
         */
        onPanResponderGrant?: ActiveCallback | PassiveCallback;
        onPanResponderReject?: PassiveCallback;
        onPanResponderStart?: PassiveCallback;
        onPanResponderEnd?: PassiveCallback;
        onPanResponderRelease?: PassiveCallback;
        onPanResponderMove?: PassiveCallback;
        onPanResponderTerminate?: PassiveCallback;
        onPanResponderTerminationRequest?: ActiveCallback;
        onShouldBlockNativeResponder?: ActiveCallback;
    }>): any;
};
export declare type PanResponderInstance = $Call1<typeof PanResponder["create"], PanResponderConfig>;
export {};
