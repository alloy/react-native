declare const ImagePickerIOS: {
    canRecordVideos: (callback: (result: boolean) => void) => void;
    canUseCamera: (callback: (result: boolean) => void) => void;
    openCameraDialog: (config: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        unmirrorFrontFacingCamera?: boolean | undefined;
        videoMode?: boolean | undefined;
    }>, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;
    openSelectDialog: (config: import("utility-types/dist/mapped-types")._DeepReadonlyObject<{
        showImages?: boolean | undefined;
        showVideos?: boolean | undefined;
    }>, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;
    /**
     * In iOS 13, the video URLs returned by the Image Picker are invalidated when
     * the picker is dismissed, unless reference to it is held. This API allows
     * the application to signal when it's finished with the video so that the
     * reference can be cleaned up.
     * It is safe to call this method for urlsthat aren't video URLs;
     * it will be a no-op.
     */
    removePendingVideo: (url: string) => void;
    /**
     * WARNING: In most cases, removePendingVideo should be used instead because
     * clearAllPendingVideos could clear out pending videos made by other callers.
     */
    clearAllPendingVideos: () => void;
};
export default ImagePickerIOS;
