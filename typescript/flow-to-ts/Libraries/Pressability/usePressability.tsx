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
