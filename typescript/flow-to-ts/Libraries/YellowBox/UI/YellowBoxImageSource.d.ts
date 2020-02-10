/**
 * We use inline images for YellowBox in order to avoid display latency due to
 * resource contention with symbolicating stack traces.
 *
 * The following steps were used to create these:
 *
 *   1. Download SVG files from: https://feathericons.com
 *   2. Rasterize SVG files to PNG files at 16dp, 36dp, and 48dp.
 *   3. Convert to Base64: https://www.google.com/search?q=base64+image+encoder
 *
 * @see https://github.com/feathericons/feather
 * @copyright 2013-2017 Cole Bemis
 * @license MIT
 */
declare const YellowBoxImageSource: {
    alertTriangle: string;
    check: string;
    chevronLeft: string;
    chevronRight: string;
    loader: string;
};
export default YellowBoxImageSource;
