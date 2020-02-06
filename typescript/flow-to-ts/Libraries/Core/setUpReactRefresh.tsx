'use strict';;
import DevSettings from '../Utilities/DevSettings';
import ReactRefreshRuntime from 'react-refresh/runtime';












if (__DEV__) {
  if (typeof DevSettings.reload !== 'function') {
    throw new Error('Could not find the reload() implementation.');
  }

  ReactRefreshRuntime.injectIntoGlobalHook(global);

  const Refresh = {
    performFullRefresh(reason: string) {
      DevSettings.reload(reason);
    },

    createSignatureFunctionForTransform: ReactRefreshRuntime.createSignatureFunctionForTransform,

    isLikelyComponentType: ReactRefreshRuntime.isLikelyComponentType,

    getFamilyByType: ReactRefreshRuntime.getFamilyByType,

    register: ReactRefreshRuntime.register,

    performReactRefresh() {
      if (ReactRefreshRuntime.hasUnrecoverableErrors()) {
        DevSettings.reload('Fast Refresh - Unrecoverable');
        return;
      }
      ReactRefreshRuntime.performReactRefresh();
      DevSettings.onFastRefresh();
    }
  };

  (require as any).Refresh = Refresh;
}
