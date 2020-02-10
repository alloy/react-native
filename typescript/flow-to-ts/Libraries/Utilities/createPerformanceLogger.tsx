'use strict';;
import Systrace from '../Performance/Systrace';
import infoLog from './infoLog';
import _Import0 from 'fbjs/lib/performanceNow';
const performanceNow = global.nativeQPLTimestamp || global.nativePerformanceNow || _Import0;

type Timespan = {
  description?: string;
  totalTime?: number;
  startTime?: number;
  endTime?: number;

};

export type IPerformanceLogger = {
  addTimespan(arg0: string, arg1: number, arg2: string | void): void;
  startTimespan(arg0: string, arg1: string | void): void;
  stopTimespan(arg0: string): void;
  clear(): void;
  clearCompleted(): void;
  clearExceptTimespans(arg0: Array<string>): void;
  currentTimestamp(): number;
  getTimespans(): {
    [key: string]: Timespan;
  };
  hasTimespan(arg0: string): boolean;
  logTimespans(): void;
  addTimespans(arg0: Array<number>, arg1: Array<string>): void;
  setExtra(arg0: string, arg1: any): void;
  getExtras(): {
    [key: string]: any;
  };
  removeExtra(arg0: string): any | null | undefined;
  logExtras(): void;
  markPoint(arg0: string, arg1: number | void): void;
  getPoints(): {
    [key: string]: number;
  };
  logPoints(): void;
  logEverything(): void;

};

const _cookies: {
  [key: string]: number;
} = {};

const PRINT_TO_CONSOLE: false = false; // Type as false to prevent accidentally committing `true`;

/**
 * This function creates performance loggers that can be used to collect and log
 * various performance data such as timespans, points and extras.
 * The loggers need to have minimal overhead since they're used in production.
 */
function createPerformanceLogger(): IPerformanceLogger {
  return null as any;
}

export default createPerformanceLogger;;
