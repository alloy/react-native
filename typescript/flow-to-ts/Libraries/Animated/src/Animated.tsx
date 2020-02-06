'use strict';;
import Platform from "../../Utilities/Platform";
const View = require('../../Components/View/View');
const React = require('react');
import { AnimatedComponentType } from "./createAnimatedComponent";

const AnimatedMock = require('./AnimatedMock');
const AnimatedImplementation = require('./AnimatedImplementation');

const Animated = ((Platform.isTesting ? AnimatedMock : AnimatedImplementation) as typeof AnimatedMock);

export default {
  get FlatList(): any {
    return require('./components/AnimatedFlatList');
  },
  get Image(): any {
    return require('./components/AnimatedImage');
  },
  get ScrollView(): any {
    return require('./components/AnimatedScrollView');
  },
  get SectionList(): any {
    return require('./components/AnimatedSectionList');
  },
  get Text(): any {
    return require('./components/AnimatedText');
  },
  get View(): AnimatedComponentType<React.ElementConfig<typeof View>, React.ElementRef<typeof View>> {
    return require('./components/AnimatedView');
  },
  ...Animated
};
