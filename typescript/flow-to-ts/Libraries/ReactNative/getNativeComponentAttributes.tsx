'use strict';;
import ReactNativeStyleAttributes from '../Components/View/ReactNativeStyleAttributes';
import UIManager from './UIManager';
import insetsDiffer from '../Utilities/differ/insetsDiffer';
import invariant from 'invariant';
import matricesDiffer from '../Utilities/differ/matricesDiffer';
import pointsDiffer from '../Utilities/differ/pointsDiffer';
import processColor from '../StyleSheet/processColor';
import processColorArray from '../StyleSheet/processColorArray';
import resolveAssetSource from '../Image/resolveAssetSource';
import sizesDiffer from '../Utilities/differ/sizesDiffer';
import warning from 'fbjs/lib/warning';

function getNativeComponentAttributes(uiViewClassName: string): any {
  return null as any;
}

// TODO: Figure out how this makes sense. We're using a global boolean to only
// initialize this on the first eagerly initialized native component.
let hasAttachedDefaultEventTypes = false;
function attachDefaultEventTypes(viewConfig: any) {
  // This is supported on UIManager platforms (ex: Android),
  // as lazy view managers are not implemented for all platforms.
  // See [UIManager] for details on constants and implementations.
  const constants = UIManager.getConstants();
  if (constants.ViewManagerNames || constants.LazyViewManagersEnabled) {
    // Lazy view managers enabled.
    viewConfig = merge(viewConfig, UIManager.getDefaultEventTypes());
  } else {
    viewConfig.bubblingEventTypes = merge(viewConfig.bubblingEventTypes, constants.genericBubblingEventTypes);
    viewConfig.directEventTypes = merge(viewConfig.directEventTypes, constants.genericDirectEventTypes);
  }
}

// TODO: Figure out how to avoid all this runtime initialization cost.
function merge(destination: any | null | undefined, source: any | null | undefined): any | null | undefined {
  return null as any;
}

function getDifferForType(typeName: string): ((prevProp: any, nextProp: any) => boolean) | null | undefined {
  return null as any;
}

function getProcessorForType(typeName: string): ((nextProp: any) => any) | null | undefined {
  return null as any;
}

export default getNativeComponentAttributes;;
