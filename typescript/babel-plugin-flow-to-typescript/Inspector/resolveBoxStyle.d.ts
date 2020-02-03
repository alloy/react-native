declare const I18nManager: any;
/**
 * Resolve a style property into its component parts.
 *
 * For example:
 *
 *   > resolveProperties('margin', {margin: 5, marginBottom: 10})
 *   {top: 5, left: 5, right: 5, bottom: 10}
 *
 * If no parts exist, this returns null.
 */
declare function resolveBoxStyle(prefix: string, style: object): Readonly<{
    bottom: number;
    left: number;
    right: number;
    top: number;
}> | undefined | null;
