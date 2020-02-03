import { $ReadOnly } from "utility-types";
import { BlurEvent, FocusEvent, PressEvent } from "../../Types/CoreEventTypes";
import TVEventHandler from "../../Components/AppleTV/TVEventHandler";
declare type TVTouchableConfig = $ReadOnly<{
    getDisabled: () => boolean;
    onBlur: (event: BlurEvent) => unknown;
    onFocus: (event: FocusEvent) => unknown;
    onPress: (event: PressEvent) => unknown;
}>;
export default class TVTouchable {
    _tvEventHandler: TVEventHandler;
    constructor(component: any, config: TVTouchableConfig);
    destroy(): void;
}
export {};
