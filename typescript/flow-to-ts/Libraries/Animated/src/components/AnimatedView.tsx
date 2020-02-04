yarn run v1.21.1
$ /Users/eloy/Code/ReactNative/react-native/node_modules/.bin/flow-to-ts Libraries/Animated/src/components/AnimatedView.js
'use strict';












const View = require('../../../Components/View/View');

const createAnimatedComponent = require('../createAnimatedComponent');

const React = require('react');

import { AnimatedComponentType } from "../createAnimatedComponent";

module.exports = (createAnimatedComponent(View) as AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>>);
Done in 0.46s.
