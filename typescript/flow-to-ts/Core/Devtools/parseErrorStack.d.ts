export declare type ExtendedError = Error & {
    jsEngine?: string;
    preventSymbolication?: boolean;
    componentStack?: string;
    forceRedbox?: boolean;
    isComponentError?: boolean;
};
