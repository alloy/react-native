'use strict';;
const requireNativeComponent = require('../ReactNative/requireNativeComponent');
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";

const TextInlineImage: HostComponent<unknown> = requireNativeComponent<unknown>('RCTTextInlineImage');

export default TextInlineImage;
