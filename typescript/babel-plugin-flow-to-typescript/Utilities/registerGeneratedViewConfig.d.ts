export declare type GeneratedViewConfig = {
    uiViewClassName: string;
    bubblingEventTypes?: Readonly<{
        [eventName: string]: Readonly<{
            phasedRegistrationNames: Readonly<{
                captured: string;
                bubbled: string;
            }>;
        }>;
    }>;
    directEventTypes?: Readonly<{
        [eventName: string]: Readonly<{
            registrationName: string;
        }>;
    }>;
    validAttributes?: {
        [propName: string]: true | Readonly<{
            diff?: <T>(arg1: any, arg2: any) => boolean;
            process?: (arg1: any) => any;
        }>;
    };
};
