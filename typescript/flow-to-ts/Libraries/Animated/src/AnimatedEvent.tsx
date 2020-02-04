yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Animated/src/AnimatedEvent.js
'use strict';












const AnimatedValue = require('./nodes/AnimatedValue');
const NativeAnimatedHelper = require('./NativeAnimatedHelper');
const ReactNative = require('../../Renderer/shims/ReactNative');

const invariant = require('invariant');

const {
  shouldUseNativeDriver
} = require('./NativeAnimatedHelper');

export type Mapping = {
  [key: string]: Mapping;
} | AnimatedValue;
export type EventConfig = {
  listener?: Function | null | undefined;
  useNativeDriver: boolean;

};

function attachNativeEvent(viewRef: any, eventName: string, argMapping: ReadonlyArray<Mapping | null | undefined>): {detach: () => void;} {
  // Find animated values in `argMapping` and create an array representing their
  // key path inside the `nativeEvent` object. Ex.: ['contentOffset', 'x'].
  const eventMappings = [];

  const traverse = (value, path) => {
    if (value instanceof AnimatedValue) {
      value.__makeNative();

      eventMappings.push({
        nativeEventPath: path,
        animatedValueTag: value.__getNativeTag()
      });
    } else if (typeof value === 'object') {
      for (const key in value) {
        traverse(value[key], path.concat(key));
      }
    }
  };

  invariant(argMapping[0] && argMapping[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');

  // Assume that the event containing `nativeEvent` is always the first argument.
  traverse(argMapping[0].nativeEvent, []);

  const viewTag = ReactNative.findNodeHandle(viewRef);
  if (viewTag != null) {
    eventMappings.forEach(mapping => {
      NativeAnimatedHelper.API.addAnimatedEventToView(viewTag, eventName, mapping);
    });
  }

  return {
    detach() {
      if (viewTag != null) {
        eventMappings.forEach(mapping => {
          NativeAnimatedHelper.API.removeAnimatedEventFromView(viewTag, eventName, mapping.animatedValueTag);
        });
      }
    }
  };
}

function validateMapping(argMapping, args) {
  const validate = (recMapping, recEvt, key) => {
    if (recMapping instanceof AnimatedValue) {
      invariant(typeof recEvt === 'number', 'Bad mapping of event key ' + key + ', should be number but got ' + typeof recEvt);
      return;
    }
    if (typeof recEvt === 'number') {
      invariant(recMapping instanceof AnimatedValue, 'Bad mapping of type ' + typeof recMapping + ' for key ' + key + ', event value must map to AnimatedValue');
      return;
    }
    invariant(typeof recMapping === 'object', 'Bad mapping of type ' + typeof recMapping + ' for key ' + key);
    invariant(typeof recEvt === 'object', 'Bad event of type ' + typeof recEvt + ' for key ' + key);
    for (const mappingKey in recMapping) {
      validate(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
    }
  };

  invariant(args.length >= argMapping.length, 'Event has less arguments than mapping');
  argMapping.forEach((mapping, idx) => {
    validate(mapping, args[idx], 'arg' + idx);
  });
}

class AnimatedEvent {

  _argMapping: ReadonlyArray<Mapping | null | undefined>;
  _listeners: Array<Function> = [];
  _callListeners: Function;
  _attachedEvent: {detach: () => void;} | null | undefined;
  __isNative: boolean;

  constructor(argMapping: ReadonlyArray<Mapping | null | undefined>, config: EventConfig) {
    this._argMapping = argMapping;

    if (config == null) {
      console.warn('Animated.event now requires a second argument for options');
      config = {};
    }

    if (config.listener) {
      this.__addListener(config.listener);
    }
    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = shouldUseNativeDriver(config);
  }

  __addListener(callback: Function): void {
    this._listeners.push(callback);
  }

  __removeListener(callback: Function): void {
    this._listeners = this._listeners.filter(listener => listener !== callback);
  }

  __attach(viewRef: any, eventName: string) {
    invariant(this.__isNative, 'Only native driven events need to be attached.');

    this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
  }

  __detach(viewTag: any, eventName: string) {
    invariant(this.__isNative, 'Only native driven events need to be detached.');

    this._attachedEvent && this._attachedEvent.detach();
  }

  __getHandler(): any | (...args: any) => void {
    if (this.__isNative) {
      if (__DEV__) {
        let validatedMapping = false;
        return (...args: any) => {
          if (!validatedMapping) {
            validateMapping(this._argMapping, args);
            validatedMapping = true;
          }
          this._callListeners(...args);
        };
      } else {
        return this._callListeners;
      }
    }

    let validatedMapping = false;
    return (...args: any) => {
      if (__DEV__ && !validatedMapping) {
        validateMapping(this._argMapping, args);
        validatedMapping = true;
      }

      const traverse = (recMapping, recEvt, key) => {
        if (recMapping instanceof AnimatedValue) {
          if (typeof recEvt === 'number') {
            recMapping.setValue(recEvt);
          }
        } else if (typeof recMapping === 'object') {
          for (const mappingKey in recMapping) {
            traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
          }
        }
      };
      this._argMapping.forEach((mapping, idx) => {
        traverse(mapping, args[idx], 'arg' + idx);
      });

      this._callListeners(...args);
    };
  }

  _callListeners(...args: any) {
    this._listeners.forEach(listener => listener(...args));
  }
}

module.exports = { AnimatedEvent, attachNativeEvent };
Done in 0.53s.
