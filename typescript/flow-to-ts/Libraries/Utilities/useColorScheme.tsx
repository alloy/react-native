yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Utilities/useColorScheme.js
'use strict';












import { useMemo } from "react";
import { useSubscription } from "use-subscription";
import Appearance from "./Appearance";
import { ColorSchemeName } from "./NativeAppearance";

export default function useColorScheme(): ColorSchemeName | null | undefined {
  const subscription = useMemo(() => ({
    getCurrentValue: () => Appearance.getColorScheme(),
    subscribe: callback => {
      Appearance.addChangeListener(callback);
      return () => Appearance.removeChangeListener(callback);
    }
  }), []);

  return useSubscription(subscription);
}
Done in 0.48s.
