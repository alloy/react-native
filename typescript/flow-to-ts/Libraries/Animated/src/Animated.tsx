'use strict';;
import View from '../../Components/View/View';
import React from 'react';
import AnimatedMock from './AnimatedMock';
import AnimatedImplementation from './AnimatedImplementation';
import _Import0 from './components/AnimatedFlatList';
import _Import1 from './components/AnimatedImage';
import _Import2 from './components/AnimatedScrollView';
import _Import3 from './components/AnimatedSectionList';
import _Import4 from './components/AnimatedText';
import _Import5 from './components/AnimatedView';












import Platform from "../../Utilities/Platform";
import { AnimatedComponentType } from "./createAnimatedComponent";

const Animated = ((Platform.isTesting ? AnimatedMock : AnimatedImplementation) as typeof AnimatedMock);

export default {
  get FlatList(): any {
    return _Import0;
  },
  get Image(): any {
    return _Import1;
  },
  get ScrollView(): any {
    return _Import2;
  },
  get SectionList(): any {
    return _Import3;
  },
  get Text(): any {
    return _Import4;
  },
  get View(): AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>> {
    return _Import5;
  },
  ...Animated
};;
