yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Pressability/usePressability.js
'use strict';












import Pressability, { EventHandlers, PressabilityConfig } from "./Pressability";
import { useEffect, useRef } from "react";

export default function usePressability(config: PressabilityConfig): EventHandlers {
  const pressabilityRef = useRef<Pressability | null | undefined>(null);
  if (pressabilityRef.current == null) {
    pressabilityRef.current = new Pressability(config);
  }
  const pressability = pressabilityRef.current;

  // On the initial mount, this is a no-op. On updates, `pressability` will be
  // re-configured to use the new configuration.
  useEffect(() => {
    pressability.configure(config);
  }, [config, pressability]);

  // On unmount, reset pending state and timers inside `pressability`. This is
  // a separate effect because we do not want to reset when `config` changes.
  useEffect(() => {
    return () => {
      pressability.reset();
    };
  }, [pressability]);

  return pressability.getEventHandlers();
}
Done in 0.47s.
