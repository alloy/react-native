import { TurboModule } from './RCTExport';
export declare function get<T extends TurboModule>(name: string): T | undefined | null;
export declare function getEnforcing<T extends TurboModule>(name: string): T;
