declare const DeprecatedImageStylePropTypes: any;
declare const DeprecatedTextStylePropTypes: any;
declare const DeprecatedViewStylePropTypes: any;
declare const invariant: any;
declare const ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
declare class StyleSheetValidation {
    static validateStyleProp(prop: string, style: Object, caller: string): void;
    static validateStyle(name: string, styles: Object): void;
    static addValidStylePropTypes(stylePropTypes: any): void;
}
declare const styleError: (message1: any, style: any, caller?: any, message2?: any) => void;
declare const allStylePropTypes: {};
