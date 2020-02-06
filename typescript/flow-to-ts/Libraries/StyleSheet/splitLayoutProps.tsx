'use strict';;
import { $ElementType } from "utility-types";












import { DangerouslyImpreciseStyle } from "./StyleSheet";

const OUTER_PROPS = Object.assign(Object.create(null), {
  margin: true,
  marginHorizontal: true,
  marginVertical: true,
  marginBottom: true,
  marginTop: true,
  marginLeft: true,
  marginRight: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  alignSelf: true,
  height: true,
  minHeight: true,
  maxHeight: true,
  width: true,
  minWidth: true,
  maxWidth: true,
  position: true,
  left: true,
  right: true,
  bottom: true,
  top: true,
  transform: true
});

function splitLayoutProps(props: DangerouslyImpreciseStyle | null | undefined): {
  outer: DangerouslyImpreciseStyle;
  inner: DangerouslyImpreciseStyle;

} {
  const inner = {};
  const outer = {};
  if (props) {
    Object.keys(props).forEach(k => {
      const value: $ElementType<DangerouslyImpreciseStyle, typeof k> = props[k];
      if (OUTER_PROPS[k]) {
        outer[k] = value;
      } else {
        inner[k] = value;
      }
    });
  }
  return { outer, inner };
}

export default splitLayoutProps;
