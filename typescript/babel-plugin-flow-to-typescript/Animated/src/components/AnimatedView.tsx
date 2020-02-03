/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */
'use strict';

const View = require('../../../Components/View/View');

const createAnimatedComponent = require('../createAnimatedComponent');

const React = require('react');

import { AnimatedComponentType } from '../createAnimatedComponent';
module.exports = (createAnimatedComponent(View) as AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>>);