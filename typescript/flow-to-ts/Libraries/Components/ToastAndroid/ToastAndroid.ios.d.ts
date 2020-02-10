declare const ToastAndroid: {
    show: (message: string, duration: number) => void;
    showWithGravity: (message: string, duration: number, gravity: number) => void;
    showWithGravityAndOffset: (message: string, duration: number, gravity: number, xOffset: number, yOffset: number) => void;
};
export default ToastAndroid;
