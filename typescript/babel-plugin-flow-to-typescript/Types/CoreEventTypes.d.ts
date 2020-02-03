import * as React from 'react';
import { HostComponent } from '../Renderer/shims/ReactNativeTypes';
export declare type SyntheticEvent<T> = Readonly<{
    bubbles: boolean | undefined | null;
    cancelable: boolean | undefined | null;
    currentTarget: number | React.ElementRef<HostComponent<unknown>>;
    defaultPrevented: boolean | undefined | null;
    dispatchConfig: Readonly<{
        registrationName: string;
    }>;
    eventPhase: number | undefined | null;
    preventDefault: () => void;
    isDefaultPrevented: () => boolean;
    stopPropagation: () => void;
    isPropagationStopped: () => boolean;
    isTrusted: boolean | undefined | null;
    nativeEvent: T;
    persist: () => void;
    target: (number | undefined | null) | React.ElementRef<HostComponent<unknown>>;
    timeStamp: number;
    type: string | undefined | null;
}>;
export declare type ResponderSyntheticEvent<T> = Readonly<{
    touchHistory: Readonly<{
        indexOfSingleActiveTouch: number;
        mostRecentTimeStamp: number;
        numberActiveTouches: number;
        touchBank: ReadonlyArray<Readonly<{
            touchActive: boolean;
            startPageX: number;
            startPageY: number;
            startTimeStamp: number;
            currentPageX: number;
            currentPageY: number;
            currentTimeStamp: number;
            previousPageX: number;
            previousPageY: number;
            previousTimeStamp: number;
        }>>;
    }>;
} & SyntheticEvent<T>>;
export declare type Layout = Readonly<{
    x: number;
    y: number;
    width: number;
    height: number;
}>;
export declare type TextLayout = Readonly<{
    ascender: number;
    capHeight: number;
    descender: number;
    text: string;
    xHeight: number;
} & Layout>;
export declare type LayoutEvent = SyntheticEvent<Readonly<{
    layout: Layout;
}>>;
export declare type TextLayoutEvent = SyntheticEvent<Readonly<{
    lines: Array<TextLayout>;
}>>;
export declare type PressEvent = ResponderSyntheticEvent<Readonly<{
    changedTouches: ReadonlyArray<PressEvent["nativeEvent"]>;
    force: number;
    identifier: number;
    locationX: number;
    locationY: number;
    pageX: number;
    pageY: number;
    target: number | undefined | null;
    timestamp: number;
    touches: ReadonlyArray<PressEvent["nativeEvent"]>;
}>>;
export declare type ScrollEvent = SyntheticEvent<Readonly<{
    contentInset: Readonly<{
        bottom: number;
        left: number;
        right: number;
        top: number;
    }>;
    contentOffset: Readonly<{
        y: number;
        x: number;
    }>;
    contentSize: Readonly<{
        height: number;
        width: number;
    }>;
    layoutMeasurement: Readonly<{
        height: number;
        width: number;
    }>;
    targetContentOffset?: Readonly<{
        y: number;
        x: number;
    }>;
    velocity?: Readonly<{
        y: number;
        x: number;
    }>;
    zoomScale?: number;
    responderIgnoreScroll?: boolean;
}>>;
export declare type BlurEvent = SyntheticEvent<Readonly<{
    target: number;
}>>;
export declare type FocusEvent = SyntheticEvent<Readonly<{
    target: number;
}>>;
export declare type MouseEvent = SyntheticEvent<Readonly<{
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    timestamp: number;
}>>;
