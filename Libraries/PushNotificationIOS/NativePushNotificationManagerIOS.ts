/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import { TurboModule } from "../TurboModule/RCTExport";
import * as TurboModuleRegistry from "../TurboModule/TurboModuleRegistry";

type Permissions = {
  alert: boolean;
  badge: boolean;
  sound: boolean;
};

type Notification = {
  readonly alertTitle?: string | null | undefined;
  // Actual type: string | number
  readonly fireDate?: number | null | undefined;
  readonly alertBody?: string | null | undefined;
  readonly alertAction?: string | null | undefined;
  readonly userInfo?: Object | null | undefined;
  readonly category?: string | null | undefined;
  // Actual type: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute'
  readonly repeatInterval?: string | null | undefined;
  readonly applicationIconBadgeNumber?: number | null | undefined;
  readonly isSilent?: boolean | null | undefined;
};

export interface Spec extends TurboModule {
  readonly getConstants: () => {};
  readonly onFinishRemoteNotification: (notificationId: string,
  /**
   * Type:
   *  'UIBackgroundFetchResultNewData' |
   *  'UIBackgroundFetchResultNoData' |
   *  'UIBackgroundFetchResultFailed'
   */
  fetchResult: string) => void;
  readonly setApplicationIconBadgeNumber: (num: number) => void;
  readonly getApplicationIconBadgeNumber: (callback: (num: number) => void) => void;
  readonly requestPermissions: (permission: {
    readonly alert: boolean;
    readonly badge: boolean;
    readonly sound: boolean;
  }) => Promise<Permissions>;
  readonly abandonPermissions: () => void;
  readonly checkPermissions: (callback: (permissions: Permissions) => void) => void;
  readonly presentLocalNotification: (notification: Notification) => void;
  readonly scheduleLocalNotification: (notification: Notification) => void;
  readonly cancelAllLocalNotifications: () => void;
  readonly cancelLocalNotifications: (userInfo: Object) => void;
  readonly getInitialNotification: () => Promise<Notification | null | undefined>;
  readonly getScheduledLocalNotifications: (callback: (notification: Notification) => void) => void;
  readonly removeAllDeliveredNotifications: () => void;
  readonly removeDeliveredNotifications: (identifiers: Array<string>) => void;
  readonly getDeliveredNotifications: (callback: (notification: Array<Notification>) => void) => void;
  readonly addListener: (eventType: string) => void;
  readonly removeListeners: (count: number) => void;
}

export default (TurboModuleRegistry.get<Spec>('PushNotificationManager') as Spec | null | undefined);