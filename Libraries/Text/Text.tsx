'use strict';
import { $ReadOnly, $Shape } from "utility-types";












const DeprecatedTextPropTypes = require('../DeprecatedPropTypes/DeprecatedTextPropTypes');
const React = require('react');
const ReactNativeViewAttributes = require('../Components/View/ReactNativeViewAttributes');
const TextAncestor = require('./TextAncestor');
const Touchable = require('../Components/Touchable/Touchable');
const UIManager = require('../ReactNative/UIManager');

const createReactNativeComponentClass = require('../Renderer/shims/createReactNativeComponentClass');
const nullthrows = require('nullthrows');
const processColor = require('../StyleSheet/processColor');

import { PressEvent } from "../Types/CoreEventTypes";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { PressRetentionOffset, TextProps } from "./TextProps";

type ResponseHandlers = $ReadOnly<{
  onStartShouldSetResponder: () => boolean;
  onResponderGrant: (event: PressEvent, dispatchID: string) => void;
  onResponderMove: (event: PressEvent) => void;
  onResponderRelease: (event: PressEvent) => void;
  onResponderTerminate: (event: PressEvent) => void;
  onResponderTerminationRequest: () => boolean;
}>;

type Props = $ReadOnly<TextProps & {
  forwardedRef: React.Ref<"RCTText" | "RCTVirtualText"> | null | undefined;
}>;

type State = {
  touchable: {
    touchState: string | null | undefined;
    responderID: number | null | undefined;
  };
  isHighlighted: boolean;
  createResponderHandlers: () => ResponseHandlers;
  responseHandlers: ResponseHandlers | null | undefined;
};

const PRESS_RECT_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

const viewConfig = {
  validAttributes: {
    ...ReactNativeViewAttributes.UIView,
    isHighlighted: true,
    numberOfLines: true,
    ellipsizeMode: true,
    allowFontScaling: true,
    maxFontSizeMultiplier: true,
    disabled: true,
    selectable: true,
    selectionColor: true,
    adjustsFontSizeToFit: true,
    minimumFontScale: true,
    textBreakStrategy: true,
    onTextLayout: true,
    onInlineViewLayout: true,
    dataDetectorType: true
  },
  directEventTypes: {
    topTextLayout: {
      registrationName: 'onTextLayout'
    },
    topInlineViewLayout: {
      registrationName: 'onInlineViewLayout'
    }
  },
  uiViewClassName: 'RCTText'
};

/**
 * A React component for displaying text.
 *
 * See https://facebook.github.io/react-native/docs/text.html
 */
class TouchableText extends React.Component<Props, State> {

  static defaultProps = {
    accessible: true,
    allowFontScaling: true,
    ellipsizeMode: 'tail'
  };

  touchableGetPressRectOffset: () => PressRetentionOffset | null | undefined;
  touchableHandleActivePressIn: () => void | null | undefined;
  touchableHandleActivePressOut: () => void | null | undefined;
  touchableHandleLongPress: (event: PressEvent) => void | null | undefined;
  touchableHandlePress: (event: PressEvent) => void | null | undefined;
  touchableHandleResponderGrant: (event: PressEvent, dispatchID: string) => void | null | undefined;
  touchableHandleResponderMove: (event: PressEvent) => void | null | undefined;
  touchableHandleResponderRelease: (event: PressEvent) => void | null | undefined;
  touchableHandleResponderTerminate: (event: PressEvent) => void | null | undefined;
  touchableHandleResponderTerminationRequest: () => boolean | null | undefined;

  state = {
    ...Touchable.Mixin.touchableGetInitialState(),
    isHighlighted: false,
    createResponderHandlers: this._createResponseHandlers.bind(this),
    responseHandlers: null
  };

  static getDerivedStateFromProps(nextProps: Props, prevState: State): $Shape<State> | null {
    return prevState.responseHandlers == null && isTouchable(nextProps) ? {
      responseHandlers: prevState.createResponderHandlers()
    } : null;
  }

  static viewConfig = viewConfig;

  render(): React.ReactNode {
    let props = this.props;
    if (isTouchable(props)) {
      props = {
        ...props,
        ...this.state.responseHandlers,
        isHighlighted: this.state.isHighlighted
      };
    }
    if (props.selectionColor != null) {
      props = {
        ...props,
        selectionColor: processColor(props.selectionColor)
      };
    }
    if (__DEV__) {
      if (Touchable.TOUCH_TARGET_DEBUG && props.onPress != null) {
        props = {
          ...props,
          style: [props.style, { color: 'magenta' }]
        };
      }
    }
    return <TextAncestor.Consumer>
        {hasTextAncestor => hasTextAncestor ? <RCTVirtualText {...props} ref={props.forwardedRef} /> : <TextAncestor.Provider value={true}>
              <RCTText {...props} ref={props.forwardedRef} />
            </TextAncestor.Provider>}
      </TextAncestor.Consumer>;
  }

  _createResponseHandlers(): ResponseHandlers {
    return {
      onStartShouldSetResponder: (): boolean => {
        const {
          onStartShouldSetResponder
        } = this.props;
        const shouldSetResponder = (onStartShouldSetResponder == null ? false : onStartShouldSetResponder()) || isTouchable(this.props);

        if (shouldSetResponder) {
          this._attachTouchHandlers();
        }
        return shouldSetResponder;
      },
      onResponderGrant: (event: PressEvent, dispatchID: string): void => {
        nullthrows(this.touchableHandleResponderGrant)(event, dispatchID);
        if (this.props.onResponderGrant != null) {
          this.props.onResponderGrant.call(this, event, dispatchID);
        }
      },
      onResponderMove: (event: PressEvent): void => {
        nullthrows(this.touchableHandleResponderMove)(event);
        if (this.props.onResponderMove != null) {
          this.props.onResponderMove.call(this, event);
        }
      },
      onResponderRelease: (event: PressEvent): void => {
        nullthrows(this.touchableHandleResponderRelease)(event);
        if (this.props.onResponderRelease != null) {
          this.props.onResponderRelease.call(this, event);
        }
      },
      onResponderTerminate: (event: PressEvent): void => {
        nullthrows(this.touchableHandleResponderTerminate)(event);
        if (this.props.onResponderTerminate != null) {
          this.props.onResponderTerminate.call(this, event);
        }
      },
      onResponderTerminationRequest: (): boolean => {
        const {
          onResponderTerminationRequest
        } = this.props;
        if (!nullthrows(this.touchableHandleResponderTerminationRequest)()) {
          return false;
        }
        if (onResponderTerminationRequest == null) {
          return true;
        }
        return onResponderTerminationRequest();
      }
    };
  }

  /**
   * Lazily attaches Touchable.Mixin handlers.
   */
  _attachTouchHandlers(): void {
    if (this.touchableGetPressRectOffset != null) {
      return;
    }
    for (const key in Touchable.Mixin) {
      if (typeof Touchable.Mixin[key] === 'function') {
        (this as any)[key] = Touchable.Mixin[key].bind(this);
      }
    }
    this.touchableHandleActivePressIn = (): void => {
      if (!this.props.suppressHighlighting && isTouchable(this.props)) {
        this.setState({ isHighlighted: true });
      }
    };
    this.touchableHandleActivePressOut = (): void => {
      if (!this.props.suppressHighlighting && isTouchable(this.props)) {
        this.setState({ isHighlighted: false });
      }
    };
    this.touchableHandlePress = (event: PressEvent): void => {
      if (this.props.onPress != null) {
        this.props.onPress(event);
      }
    };
    this.touchableHandleLongPress = (event: PressEvent): void => {
      if (this.props.onLongPress != null) {
        this.props.onLongPress(event);
      }
    };
    this.touchableGetPressRectOffset = (): PressRetentionOffset => this.props.pressRetentionOffset == null ? PRESS_RECT_OFFSET : this.props.pressRetentionOffset;
  }
}

const isTouchable = (props: Props): boolean => props.onPress != null || props.onLongPress != null || props.onStartShouldSetResponder != null;

const RCTText = createReactNativeComponentClass(viewConfig.uiViewClassName, () => viewConfig);

const RCTVirtualText = UIManager.getViewManagerConfig('RCTVirtualText') == null ? RCTText : createReactNativeComponentClass('RCTVirtualText', () => ({
  validAttributes: {
    ...ReactNativeViewAttributes.UIView,
    isHighlighted: true,
    maxFontSizeMultiplier: true
  },
  uiViewClassName: 'RCTVirtualText'
}));

const Text = (props: TextProps, forwardedRef: React.Ref<"RCTText" | "RCTVirtualText"> | null | undefined) => {
  return <TouchableText {...props} forwardedRef={forwardedRef} />;
};
const TextToExport = React.forwardRef(Text);
TextToExport.displayName = 'Text';

// TODO: Deprecate this.



TextToExport.propTypes = DeprecatedTextPropTypes;

type TextStatics = $ReadOnly<{
  propTypes: typeof DeprecatedTextPropTypes;
}>;

module.exports = ((TextToExport as any) as React.AbstractComponent<TextProps, React.ElementRef<HostComponent<TextProps>>> & TextStatics);