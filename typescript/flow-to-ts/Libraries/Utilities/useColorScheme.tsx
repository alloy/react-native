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
