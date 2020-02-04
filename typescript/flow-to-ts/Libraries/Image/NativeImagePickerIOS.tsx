yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Image/NativeImagePickerIOS.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly canRecordVideos: (callback: (result: boolean) => void) => void;
  readonly canUseCamera: (callback: (result: boolean) => void) => void;
  readonly openCameraDialog: (config: {
    unmirrorFrontFacingCamera: boolean;
    videoMode: boolean;
  }, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;
  readonly openSelectDialog: (config: {
    showImages: boolean;
    showVideos: boolean;
  }, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;
  readonly clearAllPendingVideos: () => void;
  readonly removePendingVideo: (url: string) => void;
}

export default (TurboModuleRegistry.get<Spec>('ImagePickerIOS') as Spec | null | undefined);
Done in 0.48s.
