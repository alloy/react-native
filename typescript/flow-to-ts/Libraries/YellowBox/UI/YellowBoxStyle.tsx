'use strict';;
const YellowBoxStyle = {
  getBackgroundColor(opacity: number): string {
    return `rgba(250, 186, 48, ${opacity})`;
  },

  getDividerColor(opacity: number): string {
    return `rgba(255, 255, 255, ${opacity})`;
  },

  getHighlightColor(opacity: number): string {
    return `rgba(252, 176, 29, ${opacity})`;
  },

  getTextColor(opacity: number): string {
    return `rgba(255, 255, 255, ${opacity})`;
  }
};

export default YellowBoxStyle;
