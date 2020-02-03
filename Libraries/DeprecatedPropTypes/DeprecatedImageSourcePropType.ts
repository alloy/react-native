'use strict';












const PropTypes = require('prop-types');

const ImageURISourcePropType = PropTypes.shape({
  uri: PropTypes.string,
  bundle: PropTypes.string,
  method: PropTypes.string,
  headers: PropTypes.objectOf(PropTypes.string),
  body: PropTypes.string,
  cache: PropTypes.oneOf(['default', 'reload', 'force-cache', 'only-if-cached']),
  width: PropTypes.number,
  height: PropTypes.number,
  scale: PropTypes.number
});

const ImageSourcePropType = PropTypes.oneOfType([ImageURISourcePropType, // Opaque type returned by require('./image.jpg')
PropTypes.number, // Multiple sources
PropTypes.arrayOf(ImageURISourcePropType)]);

module.exports = ImageSourcePropType;