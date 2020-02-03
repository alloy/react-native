declare var babel: any;
declare var babelPluginDEV: any;
declare var babelPluginModules: any;
declare var del: any;
declare var derequire: any;
declare var flatten: any;
declare var gulp: any;
declare var gulpUtil: any;
declare var header: any;
declare var objectAssign: any;
declare var runSequence: any;
declare var webpackStream: any;
declare var DEVELOPMENT_HEADER: string;
declare var PRODUCTION_HEADER: string;
declare var babelOpts: {
    nonStandard: boolean;
    loose: string[];
    stage: number;
    plugins: any[];
    _moduleMap: any;
};
declare var buildDist: (opts: any) => any;
declare var paths: {
    dist: string;
    entry: string;
    lib: string;
    src: string[];
};
