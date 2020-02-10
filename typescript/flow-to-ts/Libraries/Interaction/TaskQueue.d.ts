declare type SimpleTask = {
    name: string;
    run: (() => void);
};
declare type PromiseTask = {
    name: string;
    gen: (() => Promise<any>);
};
export declare type Task = ((...args: any) => any) | SimpleTask | PromiseTask;
/**
 * TaskQueue - A system for queueing and executing a mix of simple callbacks and
 * trees of dependent tasks based on Promises. No tasks are executed unless
 * `processNext` is called.
 *
 * `enqueue` takes a Task object with either a simple `run` callback, or a
 * `gen` function that returns a `Promise` and puts it in the queue.  If a gen
 * function is supplied, then the promise it returns will block execution of
 * tasks already in the queue until it resolves. This can be used to make sure
 * the first task is fully resolved (including asynchronous dependencies that
 * also schedule more tasks via `enqueue`) before starting on the next task.
 * The `onMoreTasks` constructor argument is used to inform the owner that an
 * async task has resolved and that the queue should be processed again.
 *
 * Note: Tasks are only actually executed with explicit calls to `processNext`.
 */
declare class TaskQueue {
    /**
     * TaskQueue instances are self contained and independent, so multiple tasks
     * of varying semantics and priority can operate together.
     *
     * `onMoreTasks` is invoked when `PromiseTask`s resolve if there are more
     * tasks to process.
     */
    constructor({ onMoreTasks }: {
        onMoreTasks: (() => void);
    });
    /**
     * Add a task to the queue.  It is recommended to name your tasks for easier
     * async debugging. Tasks will not be executed until `processNext` is called
     * explicitly.
     */
    enqueue(task: Task): void;
    enqueueTasks(tasks: Array<Task>): void;
    cancelTasks(tasksToCancel: Array<Task>): void;
    /**
     * Check to see if `processNext` should be called.
     *
     * @returns {boolean} Returns true if there are tasks that are ready to be
     * processed with `processNext`, or returns false if there are no more tasks
     * to be processed right now, although there may be tasks in the queue that
     * are blocked by earlier `PromiseTask`s that haven't resolved yet.
     * `onMoreTasks` will be called after each `PromiseTask` resolves if there are
     * tasks ready to run at that point.
     */
    hasTasksToProcess(): boolean;
    /**
     * Executes the next task in the queue.
     */
    processNext(): void;
    _queueStack: Array<{
        tasks: Array<Task>;
        popable: boolean;
    }>;
    _onMoreTasks: (() => void);
    _getCurrentQueue(): Array<Task>;
    _genPromise(task: PromiseTask): void;
}
export default TaskQueue;
