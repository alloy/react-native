/**
 * Tries to stringify with JSON.stringify and toString, but catches exceptions
 * (e.g. from circular objects) and always returns a string and never throws.
 */
declare function stringifySafe(arg: any): string;
export default stringifySafe;
