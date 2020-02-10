/**
 * A simple class for batching up invocations of a low-pri callback. A timeout is set to run the
 * callback once after a delay, no matter how many times it's scheduled. Once the delay is reached,
 * InteractionManager.runAfterInteractions is used to invoke the callback after any hi-pri
 * interactions are done running.
 *
 * Make sure to cleanup with dispose().  Example:
 *
 *   class Widget extends React.Component {
 *     _batchedSave: new Batchinator(() => this._saveState, 1000);
 *     _saveSate() {
 *       // save this.state to disk
 *     }
 *     componentDidUpdate() {
 *       this._batchedSave.schedule();
 *     }
 *     componentWillUnmount() {
 *       this._batchedSave.dispose();
 *     }
 *     ...
 *   }
 */
declare class Batchinator {
    _callback: (() => void);
    _delay: number;
    _taskHandle: {
        cancel: (() => void);
    } | null | undefined;
    constructor(callback: (() => void), delayMS: number);
    dispose(options?: {
        abort: boolean;
    }): void;
    schedule(): void;
}
export default Batchinator;
