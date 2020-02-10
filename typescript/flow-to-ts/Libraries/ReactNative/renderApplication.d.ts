import React from 'react';
import '../Utilities/BackHandler';
import { IPerformanceLogger } from "../Utilities/createPerformanceLogger";
declare function renderApplication<Props extends any>(RootComponent: React.ComponentType<Props>, initialProps: Props, rootTag: any, WrapperComponent?: React.ComponentType<any> | null | undefined, fabric?: boolean, showArchitectureIndicator?: boolean, scopedPerformanceLogger?: IPerformanceLogger, isLogBox?: boolean): void;
export default renderApplication;
