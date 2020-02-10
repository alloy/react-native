declare class StyleSheetValidation {
    static validateStyleProp(prop: string, style: any, caller: string): void;
    static validateStyle(name: string, styles: any): void;
    static addValidStylePropTypes(stylePropTypes: any): void;
}
export default StyleSheetValidation;
