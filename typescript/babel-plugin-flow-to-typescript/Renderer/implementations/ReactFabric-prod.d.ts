declare var ReactNativePrivateInterface: any, React: any, Scheduler: any;
declare var eventPluginOrder: any, namesToPlugins: {};
declare var plugins: any[], eventNameDispatchConfigs: {}, registrationNameModules: {};
declare var hasError: boolean, caughtError: any, hasRethrowError: boolean, rethrowError: any, reporter: {
    onError: (error: any) => void;
};
declare var getFiberCurrentPropsFromNode: any, getInstanceFromNode: any, getNodeFromInstance: any;
declare var eventQueue: any;
declare var injection: {
    injectEventPluginOrder: (injectedEventPluginOrder: any) => void;
    injectEventPluginsByName: (injectedNamesToPlugins: any) => void;
};
declare var ResponderSyntheticEvent: {
    (): any;
    prototype: any;
    Interface: any;
    extend: any;
};
declare var startDependencies: string[], moveDependencies: string[], endDependencies: string[], touchBank: any[], touchHistory: {
    touchBank: any[];
    numberActiveTouches: number;
    indexOfSingleActiveTouch: number;
    mostRecentTimeStamp: number;
};
declare var ResponderTouchHistoryStore: {
    recordTouchTrack: (topLevelType: any, nativeEvent: any) => void;
    touchHistory: {
        touchBank: any[];
        numberActiveTouches: number;
        indexOfSingleActiveTouch: number;
        mostRecentTimeStamp: number;
    };
};
declare var responderInst: any, trackedTouchCount: number;
declare var eventTypes: {
    startShouldSetResponder: {
        phasedRegistrationNames: {
            bubbled: string;
            captured: string;
        };
        dependencies: string[];
    };
    scrollShouldSetResponder: {
        phasedRegistrationNames: {
            bubbled: string;
            captured: string;
        };
        dependencies: string[];
    };
    selectionChangeShouldSetResponder: {
        phasedRegistrationNames: {
            bubbled: string;
            captured: string;
        };
        dependencies: string[];
    };
    moveShouldSetResponder: {
        phasedRegistrationNames: {
            bubbled: string;
            captured: string;
        };
        dependencies: string[];
    };
    responderStart: {
        registrationName: string;
        dependencies: string[];
    };
    responderMove: {
        registrationName: string;
        dependencies: string[];
    };
    responderEnd: {
        registrationName: string;
        dependencies: string[];
    };
    responderRelease: {
        registrationName: string;
        dependencies: string[];
    };
    responderTerminationRequest: {
        registrationName: string;
        dependencies: any[];
    };
    responderGrant: {
        registrationName: string;
        dependencies: any[];
    };
    responderReject: {
        registrationName: string;
        dependencies: any[];
    };
    responderTerminate: {
        registrationName: string;
        dependencies: any[];
    };
}, ResponderEventPlugin: {
    _getResponder: () => any;
    eventTypes: {
        startShouldSetResponder: {
            phasedRegistrationNames: {
                bubbled: string;
                captured: string;
            };
            dependencies: string[];
        };
        scrollShouldSetResponder: {
            phasedRegistrationNames: {
                bubbled: string;
                captured: string;
            };
            dependencies: string[];
        };
        selectionChangeShouldSetResponder: {
            phasedRegistrationNames: {
                bubbled: string;
                captured: string;
            };
            dependencies: string[];
        };
        moveShouldSetResponder: {
            phasedRegistrationNames: {
                bubbled: string;
                captured: string;
            };
            dependencies: string[];
        };
        responderStart: {
            registrationName: string;
            dependencies: string[];
        };
        responderMove: {
            registrationName: string;
            dependencies: string[];
        };
        responderEnd: {
            registrationName: string;
            dependencies: string[];
        };
        responderRelease: {
            registrationName: string;
            dependencies: string[];
        };
        responderTerminationRequest: {
            registrationName: string;
            dependencies: any[];
        };
        responderGrant: {
            registrationName: string;
            dependencies: any[];
        };
        responderReject: {
            registrationName: string;
            dependencies: any[];
        };
        responderTerminate: {
            registrationName: string;
            dependencies: any[];
        };
    };
    extractEvents: (topLevelType: any, targetInst: any, nativeEvent: any, nativeEventTarget: any) => any;
    GlobalResponderHandler: any;
    injection: {
        injectGlobalResponderHandler: (GlobalResponderHandler: any) => void;
    };
}, customBubblingEventTypes: any, customDirectEventTypes: any;
declare var ReactSharedInternals: any;
declare var hasSymbol: any, REACT_ELEMENT_TYPE: any, REACT_PORTAL_TYPE: any, REACT_FRAGMENT_TYPE: any, REACT_STRICT_MODE_TYPE: any, REACT_PROFILER_TYPE: any, REACT_PROVIDER_TYPE: any, REACT_CONTEXT_TYPE: any, REACT_CONCURRENT_MODE_TYPE: any, REACT_FORWARD_REF_TYPE: any, REACT_SUSPENSE_TYPE: any, REACT_SUSPENSE_LIST_TYPE: any, REACT_MEMO_TYPE: any, REACT_LAZY_TYPE: any, REACT_CHUNK_TYPE: any;
declare var MAYBE_ITERATOR_SYMBOL: any;
declare var emptyObject: {}, removedKeys: any, removedKeyCount: number, deepDifferOptions: {
    unsafelyIgnoreFunctions: boolean;
};
declare var restoreTarget: any, restoreQueue: any;
declare var isInsideEventHandler: boolean;
declare var _nativeFabricUIManage: any, createNode: any, cloneNode: any, cloneNodeWithNewChildren: any, cloneNodeWithNewChildrenAndProps: any, cloneNodeWithNewProps: any, createChildNodeSet: any, appendChildNode: any, appendChildNodeToSet: any, completeRoot: any, registerEventHandler: any, fabricMeasure: any, fabricMeasureInWindow: any, fabricMeasureLayout: any, getViewConfigForType: any, nextReactTag: number;
declare var ReactFabricHostComponent: (tag: any, viewConfig: any, props: any, internalInstanceHandle: any) => void;
declare var scheduleTimeout: typeof setTimeout, cancelTimeout: typeof clearTimeout;
declare var BEFORE_SLASH_RE: RegExp;
declare var valueStack: any[], index: number;
declare var emptyContextObject: {}, contextStackCursor: {
    current: {};
}, didPerformWorkStackCursor: {
    current: boolean;
}, previousContext: {};
declare var Scheduler_runWithPriority: any, Scheduler_scheduleCallback: any, Scheduler_cancelCallback: any, Scheduler_shouldYield: any, Scheduler_requestPaint: any, Scheduler_now: any, Scheduler_getCurrentPriorityLevel: any, Scheduler_ImmediatePriority: any, Scheduler_UserBlockingPriority: any, Scheduler_NormalPriority: any, Scheduler_LowPriority: any, Scheduler_IdlePriority: any, fakeCallbackNode: {}, requestPaint: any, syncQueue: any, immediateQueueCallbackNode: any, isFlushingSyncQueue: boolean, initialTimeMs: any, now: any;
declare var is$1: any, hasOwnProperty: (v: string | number | symbol) => boolean;
declare var valueCursor: {
    current: any;
}, currentlyRenderingFiber: any, lastContextDependency: any, lastContextWithAllBitsObserved: any;
declare var hasForceUpdate: boolean;
declare var ReactCurrentBatchConfig: any, emptyRefsObject: any;
declare var classComponentUpdater: {
    isMounted: (component: any) => boolean;
    enqueueSetState: (inst: any, payload: any, callback: any) => void;
    enqueueReplaceState: (inst: any, payload: any, callback: any) => void;
    enqueueForceUpdate: (inst: any, callback: any) => void;
};
declare var isArray: (arg: any) => arg is any[];
declare var reconcileChildFibers: (returnFiber: any, currentFirstChild: any, newChild: any, expirationTime: any) => any, mountChildFibers: (returnFiber: any, currentFirstChild: any, newChild: any, expirationTime: any) => any, NO_CONTEXT: {}, contextStackCursor$1: {
    current: {};
}, contextFiberStackCursor: {
    current: {};
}, rootInstanceStackCursor: {
    current: {};
};
declare var suspenseStackCursor: {
    current: number;
};
declare var ReactCurrentDispatcher$1: any, ReactCurrentBatchConfig$1: any, renderExpirationTime$1: number, currentlyRenderingFiber$1: any, currentHook: any, workInProgressHook: any, didScheduleRenderPhaseUpdate: boolean, renderPhaseUpdates: any, numberOfReRenders: number;
declare var ContextOnlyDispatcher: {
    readContext: typeof readContext;
    useCallback: typeof throwInvalidHookError;
    useContext: typeof throwInvalidHookError;
    useEffect: typeof throwInvalidHookError;
    useImperativeHandle: typeof throwInvalidHookError;
    useLayoutEffect: typeof throwInvalidHookError;
    useMemo: typeof throwInvalidHookError;
    useReducer: typeof throwInvalidHookError;
    useRef: typeof throwInvalidHookError;
    useState: typeof throwInvalidHookError;
    useDebugValue: typeof throwInvalidHookError;
    useResponder: typeof throwInvalidHookError;
    useDeferredValue: typeof throwInvalidHookError;
    useTransition: typeof throwInvalidHookError;
}, HooksDispatcherOnMount: {
    readContext: typeof readContext;
    useCallback: typeof mountCallback;
    useContext: typeof readContext;
    useEffect: typeof mountEffect;
    useImperativeHandle: (ref: any, create: any, deps: any) => void;
    useLayoutEffect: (create: any, deps: any) => void;
    useMemo: (nextCreate: any, deps: any) => any;
    useReducer: (reducer: any, initialArg: any, init: any) => any[];
    useRef: (initialValue: any) => any;
    useState: typeof mountState;
    useDebugValue: typeof mountDebugValue;
    useResponder: typeof createDeprecatedResponderListener;
    useDeferredValue: (value: any, config: any) => any;
    useTransition: (config: any) => any[];
}, HooksDispatcherOnUpdate: {
    readContext: typeof readContext;
    useCallback: typeof updateCallback;
    useContext: typeof readContext;
    useEffect: typeof updateEffect;
    useImperativeHandle: (ref: any, create: any, deps: any) => void;
    useLayoutEffect: (create: any, deps: any) => void;
    useMemo: (nextCreate: any, deps: any) => any;
    useReducer: typeof updateReducer;
    useRef: () => any;
    useState: typeof updateState;
    useDebugValue: typeof mountDebugValue;
    useResponder: typeof createDeprecatedResponderListener;
    useDeferredValue: (value: any, config: any) => any;
    useTransition: (config: any) => any[];
}, hydrationParentFiber: any, nextHydratableInstance: any, isHydrating: boolean;
declare var ReactCurrentOwner$3: any, didReceiveUpdate: boolean;
declare var SUSPENDED_MARKER: {
    dehydrated: any;
    retryTime: number;
};
declare var appendAllChildren: any, updateHostContainer: any, updateHostComponent$1: any, updateHostText$1: any;
declare var PossiblyWeakSet: any;
declare var PossiblyWeakMap: any;
declare var ceil: (x: number) => number, ReactCurrentDispatcher: any, ReactCurrentOwner$2: any, NoContext: number, LegacyUnbatchedContext: number, RenderContext: number, CommitContext: number, RootIncomplete: number, RootFatalErrored: number, RootErrored: number, RootSuspended: number, RootSuspendedWithDelay: number, RootCompleted: number, executionContext: number, workInProgressRoot: any, workInProgress: any, renderExpirationTime: number, workInProgressRootExitStatus: number, workInProgressRootFatalError: any, workInProgressRootLatestProcessedExpirationTime: number, workInProgressRootLatestSuspenseTimeout: number, workInProgressRootCanSuspendUsingConfig: any, workInProgressRootNextUnprocessedUpdateTime: number, workInProgressRootHasPendingPing: boolean, globalMostRecentFallbackTime: number, FALLBACK_THROTTLE_MS: number, nextEffect: any, hasUncaughtError: boolean, firstUncaughtError: any, legacyErrorBoundariesThatAlreadyFailed: any, rootDoesHavePassiveEffects: boolean, rootWithPendingPassiveEffects: any, pendingPassiveEffectsRenderPriority: number, rootsWithPendingDiscreteUpdates: any, nestedUpdateCount: number, rootWithNestedUpdates: any, currentEventTime: number;
declare var beginWork$$1: any;
declare var onCommitFiberRoot: any, onCommitFiberUnmount: any;
declare var roots: any, ReactFabric: {
    NativeComponent: () => any;
    findHostInstance_DEPRECATED: (componentOrHandle: any) => any;
    findNodeHandle: typeof findNodeHandle;
    dispatchCommand: (handle: any, command: any, args: any) => void;
    render: (element: any, containerTag: any, callback: any) => any;
    unmountComponentAtNode: (containerTag: any) => void;
    createPortal: (children: any, containerTag: any) => any;
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        NativeMethodsMixin: {
            measure: (callback: any) => void;
            measureInWindow: (callback: any) => void;
            measureLayout: (relativeToNativeNode: any, onSuccess: any, onFail: any) => void;
            setNativeProps: (nativeProps: any) => void;
            focus: () => void;
            blur: () => void;
        };
    };
};
declare var ReactFabric$2: {
    default: {
        NativeComponent: () => any;
        findHostInstance_DEPRECATED: (componentOrHandle: any) => any;
        findNodeHandle: typeof findNodeHandle;
        dispatchCommand: (handle: any, command: any, args: any) => void;
        render: (element: any, containerTag: any, callback: any) => any;
        unmountComponentAtNode: (containerTag: any) => void;
        createPortal: (children: any, containerTag: any) => any;
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            NativeMethodsMixin: {
                measure: (callback: any) => void;
                measureInWindow: (callback: any) => void;
                measureLayout: (relativeToNativeNode: any, onSuccess: any, onFail: any) => void;
                setNativeProps: (nativeProps: any) => void;
                focus: () => void;
                blur: () => void;
            };
        };
    };
}, ReactFabric$3: {
    NativeComponent: () => any;
    findHostInstance_DEPRECATED: (componentOrHandle: any) => any;
    findNodeHandle: typeof findNodeHandle;
    dispatchCommand: (handle: any, command: any, args: any) => void;
    render: (element: any, containerTag: any, callback: any) => any;
    unmountComponentAtNode: (containerTag: any) => void;
    createPortal: (children: any, containerTag: any) => any;
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        NativeMethodsMixin: {
            measure: (callback: any) => void;
            measureInWindow: (callback: any) => void;
            measureLayout: (relativeToNativeNode: any, onSuccess: any, onFail: any) => void;
            setNativeProps: (nativeProps: any) => void;
            focus: () => void;
            blur: () => void;
        };
    };
} | {
    default: {
        NativeComponent: () => any;
        findHostInstance_DEPRECATED: (componentOrHandle: any) => any;
        findNodeHandle: typeof findNodeHandle;
        dispatchCommand: (handle: any, command: any, args: any) => void;
        render: (element: any, containerTag: any, callback: any) => any;
        unmountComponentAtNode: (containerTag: any) => void;
        createPortal: (children: any, containerTag: any) => any;
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            NativeMethodsMixin: {
                measure: (callback: any) => void;
                measureInWindow: (callback: any) => void;
                measureLayout: (relativeToNativeNode: any, onSuccess: any, onFail: any) => void;
                setNativeProps: (nativeProps: any) => void;
                focus: () => void;
                blur: () => void;
            };
        };
    };
};
