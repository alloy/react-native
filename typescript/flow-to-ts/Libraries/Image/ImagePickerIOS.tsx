yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Image/ImagePickerIOS.js
'use strict';
import { $ReadOnly } from "utility-types";












import NativeImagePickerIOS from "./NativeImagePickerIOS";
import invariant from "invariant";

const ImagePickerIOS = {
  canRecordVideos: function (callback: (result: boolean) => void): void {
    invariant(NativeImagePickerIOS, 'ImagePickerIOS is not available');
    return NativeImagePickerIOS.canRecordVideos(callback);
  },
  canUseCamera: function (callback: (result: boolean) => void): void {
    invariant(NativeImagePickerIOS, 'ImagePickerIOS is not available');
    return NativeImagePickerIOS.canUseCamera(callback);
  },
  openCameraDialog: function (config: $ReadOnly<{
    unmirrorFrontFacingCamera?: boolean;
    videoMode?: boolean;
  }>, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void): void {
    invariant(NativeImagePickerIOS, 'ImagePickerIOS is not available');

    var newConfig = {
      videoMode: true,
      unmirrorFrontFacingCamera: false
    };

    if (config.videoMode != null) {
      newConfig.videoMode = config.videoMode;
    }

    if (config.unmirrorFrontFacingCamera != null) {
      newConfig.unmirrorFrontFacingCamera = config.unmirrorFrontFacingCamera;
    }

    return NativeImagePickerIOS.openCameraDialog(newConfig, successCallback, cancelCallback);
  },
  openSelectDialog: function (config: $ReadOnly<{
    showImages?: boolean;
    showVideos?: boolean;
  }>, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void): void {
    invariant(NativeImagePickerIOS, 'ImagePickerIOS is not available');

    var newConfig = {
      showImages: true,
      showVideos: false
    };

    if (config.showImages != null) {
      newConfig.showImages = config.showImages;
    }

    if (config.showVideos != null) {
      newConfig.showVideos = config.showVideos;
    }

    return NativeImagePickerIOS.openSelectDialog(newConfig, successCallback, cancelCallback);
  },

  /**
   * In iOS 13, the video URLs returned by the Image Picker are invalidated when
   * the picker is dismissed, unless reference to it is held. This API allows
   * the application to signal when it's finished with the video so that the
   * reference can be cleaned up.
   * It is safe to call this method for urlsthat aren't video URLs;
   * it will be a no-op.
   */
  removePendingVideo: function (url: string): void {
    invariant(NativeImagePickerIOS, 'ImagePickerIOS is not available');
    NativeImagePickerIOS.removePendingVideo(url);
  },

  /**
   * WARNING: In most cases, removePendingVideo should be used instead because
   * clearAllPendingVideos could clear out pending videos made by other callers.
   */
  clearAllPendingVideos: function (): void {
    invariant(NativeImagePickerIOS, 'ImagePickerIOS is not available');
    NativeImagePickerIOS.clearAllPendingVideos();
  }
};

module.exports = ImagePickerIOS;
Done in 0.54s.
