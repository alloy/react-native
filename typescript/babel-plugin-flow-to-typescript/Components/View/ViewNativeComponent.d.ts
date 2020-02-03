import * as React from 'react';
import { ViewProps } from './ViewPropTypes';
import { HostComponent } from '../../Renderer/shims/ReactNativeTypes';
export declare type ViewNativeComponentType = HostComponent<ViewProps>;
export declare const __INTERNAL_VIEW_CONFIG: {} | {
    bubblingEventTypes?: Readonly<{
        [eventName: string]: Readonly<{
            phasedRegistrationNames: Readonly<{
                bubbled: string;
                captured: string;
            }>;
        }>;
    }>;
    directEventTypes?: Readonly<{
        [eventName: string]: Readonly<{
            registrationName: string;
        }>;
    }>;
    uiViewClassName: string;
    validAttributes?: {
        [propName: string]: true | Readonly<{
            diff?: <T>(arg1: any, arg2: any) => boolean;
            process?: (arg1: any) => any;
        }>;
    };
};
interface NativeCommands {
    readonly hotspotUpdate: (viewRef: React.ElementRef<HostComponent<unknown>>, x: number, y: number) => void;
    readonly setPressed: (viewRef: React.ElementRef<HostComponent<unknown>>, pressed: boolean) => void;
}
export declare const Commands: NativeCommands;
declare const _default: any;
export default _default;
