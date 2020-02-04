'use strict';
import { $ReadOnly } from "utility-types";












import invariant from "invariant";
import ReactNative from "../../Renderer/shims/ReactNative.js";
import { BlurEvent, FocusEvent, PressEvent } from "../../Types/CoreEventTypes";
import Platform from "../../Utilities/Platform";
import TVEventHandler from "../../Components/AppleTV/TVEventHandler";

type TVTouchableConfig = $ReadOnly<{
  getDisabled: () => boolean;
  onBlur: (event: BlurEvent) => unknown;
  onFocus: (event: FocusEvent) => unknown;
  onPress: (event: PressEvent) => unknown;
}>;

export default class TVTouchable {

  _tvEventHandler: TVEventHandler;

  constructor(component: any, config: TVTouchableConfig) {
    invariant(Platform.isTV, 'TVTouchable: Requires `Platform.isTV`.');
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(component, (_, tvData) => {
      tvData.dispatchConfig = {};
      if (ReactNative.findNodeHandle(component) === tvData.tag) {
        if (tvData.eventType === 'focus') {
          config.onFocus(tvData);
        } else if (tvData.eventType === 'blur') {
          config.onBlur(tvData);
        } else if (tvData.eventType === 'select') {
          if (!config.getDisabled()) {
            config.onPress(tvData);
          }
        }
      }
    });
  }

  destroy(): void {
    this._tvEventHandler.disable();
  }
}
