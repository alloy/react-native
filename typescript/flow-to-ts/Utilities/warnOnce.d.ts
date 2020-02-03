declare const warning: any;
declare const warnedKeys: {
    [key: string]: boolean;
};
/**
 * A simple function that prints a warning message once per session.
 *
 * @param {string} key - The key used to ensure the message is printed once.
 *                       This should be unique to the callsite.
 * @param {string} message - The message to print
 */
declare function warnOnce(key: string, message: string): void;
