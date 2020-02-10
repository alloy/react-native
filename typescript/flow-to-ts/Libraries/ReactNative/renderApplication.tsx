'use strict';;
import AppContainer from './AppContainer';
import React from 'react';
import invariant from 'invariant';
import '../Utilities/BackHandler';
import _Import0 from '../Renderer/shims/ReactFabric';
import _Import1 from '../Renderer/shims/ReactNative';
import GlobalPerformanceLogger from "../Utilities/GlobalPerformanceLogger";
import { IPerformanceLogger } from "../Utilities/createPerformanceLogger";
import PerformanceLoggerContext from "../Utilities/PerformanceLoggerContext";

// require BackHandler so it sets the default handler that exits the app if no listeners respond
;

function renderApplication<Props extends any>(RootComponent: React.ComponentType<Props>, initialProps: Props, rootTag: any, WrapperComponent?: React.ComponentType<any> | null | undefined, fabric?: boolean, showArchitectureIndicator?: boolean, scopedPerformanceLogger?: IPerformanceLogger, isLogBox?: boolean) {
  invariant(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);

  const renderable = <PerformanceLoggerContext.Provider value={scopedPerformanceLogger ?? GlobalPerformanceLogger}>
      <AppContainer rootTag={rootTag} fabric={fabric} showArchitectureIndicator={showArchitectureIndicator} WrapperComponent={WrapperComponent} internal_excludeLogBox={isLogBox}>
        <RootComponent {...initialProps} rootTag={rootTag} />
      </AppContainer>
    </PerformanceLoggerContext.Provider>;

  GlobalPerformanceLogger.startTimespan('renderApplication_React_render');
  if (fabric) {
    _Import0.render(renderable, rootTag);
  } else {
    _Import1.render(renderable, rootTag);
  }
  GlobalPerformanceLogger.stopTimespan('renderApplication_React_render');
}

export default renderApplication;;
