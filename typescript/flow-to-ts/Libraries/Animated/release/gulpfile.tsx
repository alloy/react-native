'use strict';;
import babel from 'gulp-babel';
import babelPluginDEV from 'fbjs-scripts/babel/dev-expression';
import babelPluginModules from 'fbjs-scripts/babel/rewrite-modules';
import del from 'del';
import derequire from 'gulp-derequire';
import flatten from 'gulp-flatten';
import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import header from 'gulp-header';
import objectAssign from 'object-assign';
import runSequence from 'run-sequence';
import webpackStream from 'webpack-stream';

var DEVELOPMENT_HEADER = ['/**', ' * Animated v<%= version %>', ' */'].join('\n') + '\n';
var PRODUCTION_HEADER = ['/**', ' * Animated v<%= version %>', ' *', ' * Copyright (c) 2013-present, Facebook, Inc.', ' *', ' * This source code is licensed under the MIT license found in the', ' * LICENSE file in the root directory of this source tree.', ' */'].join('\n') + '\n';

var babelOpts = {
  nonStandard: true,
  loose: ['es6.classes'],
  stage: 1,
  plugins: [babelPluginDEV, babelPluginModules],
  _moduleMap: objectAssign({}, require('fbjs/module-map'), {
    React: 'react'
  })
};

var buildDist = function (opts) {
  var webpackOpts = {
    debug: opts.debug,
    externals: {
      react: 'React'
    },
    module: {
      loaders: [{ test: /\.js$/, loader: 'babel' }]
    },
    output: {
      filename: opts.output,
      library: 'Animated'
    },
    plugins: [new webpackStream.webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(opts.debug ? 'development' : 'production')
    }), new webpackStream.webpack.optimize.OccurenceOrderPlugin(), new webpackStream.webpack.optimize.DedupePlugin()]
  };
  if (!opts.debug) {
    webpackOpts.plugins.push(new webpackStream.webpack.optimize.UglifyJsPlugin({
      compress: {
        hoist_vars: true,
        screw_ie8: true,
        warnings: false
      }
    }));
  }
  return webpackStream(webpackOpts, null, function (err, stats) {
    if (err) {
      throw new gulpUtil.PluginError('webpack', err);
    }
    if (stats.compilation.errors.length) {
      throw new gulpUtil.PluginError('webpack', stats.toString());
    }
  });
};

var paths = {
  dist: 'dist',
  entry: 'lib/AnimatedWeb.js',
  lib: 'lib',
  src: ['*src/**/*.js', '!src/**/__tests__/**/*.js', '!src/**/__mocks__/**/*.js']
};

gulp.task('clean', function (cb) {
  del([paths.dist, paths.lib], cb);
});

gulp.task('modules', function () {
  return gulp.src(paths.src, { cwd: '../' }).pipe(babel(babelOpts)).pipe(flatten()).pipe(gulp.dest(paths.lib));
});

gulp.task('dist', ['modules'], function () {
  var distOpts = {
    debug: true,
    output: 'animated.js'
  };
  return gulp.src(paths.entry).pipe(buildDist(distOpts)).pipe(derequire()).pipe(header(DEVELOPMENT_HEADER, {
    version: process.env.npm_package_version
  })).pipe(gulp.dest(paths.dist));
});

gulp.task('dist:min', ['modules'], function () {
  var distOpts = {
    debug: false,
    output: 'animated.min.js'
  };
  return gulp.src(paths.entry).pipe(buildDist(distOpts)).pipe(header(PRODUCTION_HEADER, {
    version: process.env.npm_package_version
  })).pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function () {
  gulp.watch(paths.src, ['modules']);
});

gulp.task('default', function (cb) {
  runSequence('clean', 'modules', ['dist', 'dist:min'], cb);
});
