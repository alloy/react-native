declare const AUTO_SET_TIMESTAMP = -1;
declare const DUMMY_INSTANCE_KEY = 0;
declare const QuickPerformanceLogger: {
    markerStart(markerId: number, instanceKey?: number, timestamp?: number): void;
    markerEnd(markerId: number, actionId: number, instanceKey?: number, timestamp?: number): void;
    markerTag(markerId: number, tag: string, instanceKey?: number): void;
    markerAnnotate(markerId: number, annotationKey: string, annotationValue: string, instanceKey?: number): void;
    markerCancel(markerId: number, instanceKey?: number): void;
    markerPoint(markerId: number, name: string, instanceKey?: number, timestamp?: number): void;
    currentTimestamp(): number;
};
