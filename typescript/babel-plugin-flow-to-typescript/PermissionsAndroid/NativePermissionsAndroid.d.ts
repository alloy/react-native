import { TurboModule } from '../TurboModule/RCTExport';
export declare type PermissionStatus = string;
export declare type PermissionType = string;
export interface Spec extends TurboModule {
    readonly checkPermission: (permission: PermissionType) => Promise<boolean>;
    readonly requestPermission: (permission: PermissionType) => Promise<PermissionStatus>;
    readonly shouldShowRequestPermissionRationale: (permission: string) => Promise<boolean>;
    readonly requestMultiplePermissions: (permissions: Array<PermissionType>) => Promise<{
        [permission: PermissionType]: PermissionStatus;
    }>;
}
declare const _default: Spec;
export default _default;
