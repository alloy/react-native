declare type DevServerInfo = {
    url: string;
    bundleLoadedFromServer: boolean;
};
/**
 * Many RN development tools rely on the development server (packager) running
 * @return URL to packager with trailing slash
 */
declare function getDevServer(): DevServerInfo;
export default getDevServer;
