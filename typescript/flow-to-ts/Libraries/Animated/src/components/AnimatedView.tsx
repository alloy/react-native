'use strict';;
import View from '../../../Components/View/View';
import createAnimatedComponent from '../createAnimatedComponent';
import React from 'react';

import { AnimatedComponentType } from "../createAnimatedComponent";

export default createAnimatedComponent(View) as AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>>;;
