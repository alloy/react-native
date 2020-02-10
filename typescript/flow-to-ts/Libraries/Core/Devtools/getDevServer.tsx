'use strict';












import NativeSourceCode from "../../NativeModules/specs/NativeSourceCode";

let _cachedDevServerURL: string | null | undefined;
const FALLBACK = 'http://localhost:8081/';

type DevServerInfo = {
  url: string;
  bundleLoadedFromServer: boolean;

};

/**
 * Many RN development tools rely on the development server (packager) running
 * @return URL to packager with trailing slash
 */
function getDevServer(): DevServerInfo {
  return null as any;
}

export default getDevServer;;
