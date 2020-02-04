yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/PermissionsAndroid/NativePermissionsAndroid.js
'use strict';












import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

// TODO: Use proper enum types.
export type PermissionStatus = string;
export type PermissionType = string;

/*
export type PermissionStatus = 'granted' | 'denied' | 'never_ask_again';
export type PermissionType =
  | 'android.permission.READ_CALENDAR'
  | 'android.permission.WRITE_CALENDAR'
  | 'android.permission.CAMERA'
  | 'android.permission.READ_CONTACTS'
  | 'android.permission.WRITE_CONTACTS'
  | 'android.permission.GET_ACCOUNTS'
  | 'android.permission.ACCESS_BACKGROUND_LOCATION'
  | 'android.permission.ACCESS_FINE_LOCATION'
  | 'android.permission.ACCESS_COARSE_LOCATION'
  | 'android.permission.RECORD_AUDIO'
  | 'android.permission.READ_PHONE_STATE'
  | 'android.permission.CALL_PHONE'
  | 'android.permission.READ_CALL_LOG'
  | 'android.permission.WRITE_CALL_LOG'
  | 'com.android.voicemail.permission.ADD_VOICEMAIL'
  | 'android.permission.USE_SIP'
  | 'android.permission.PROCESS_OUTGOING_CALLS'
  | 'android.permission.BODY_SENSORS'
  | 'android.permission.SEND_SMS'
  | 'android.permission.RECEIVE_SMS'
  | 'android.permission.READ_SMS'
  | 'android.permission.RECEIVE_WAP_PUSH'
  | 'android.permission.RECEIVE_MMS'
  | 'android.permission.READ_EXTERNAL_STORAGE'
  | 'android.permission.WRITE_EXTERNAL_STORAGE';
*/
export interface Spec extends TurboModule {
  readonly checkPermission: (permission: PermissionType) => Promise<boolean>;
  readonly requestPermission: (permission: PermissionType) => Promise<PermissionStatus>;
  readonly shouldShowRequestPermissionRationale: (permission: string) => Promise<boolean>;
  readonly requestMultiplePermissions: (permissions: Array<PermissionType>) => Promise<{
    [permission: PermissionType]: PermissionStatus;
  }>;
}

export default (TurboModuleRegistry.get<Spec>('PermissionsAndroid') as Spec | null | undefined);
Done in 0.51s.
