'use strict';












const View = require('../../../Components/View/View');

const createAnimatedComponent = require('../createAnimatedComponent');

const React = require('react');

import { AnimatedComponentType } from "../createAnimatedComponent";

module.exports = (createAnimatedComponent(View) as AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>>);
