import PropTypes from 'prop-types';
declare const ImageSourcePropType: PropTypes.Requireable<number | PropTypes.InferProps<{
    uri: PropTypes.Requireable<string>;
    bundle: PropTypes.Requireable<string>;
    method: PropTypes.Requireable<string>;
    headers: PropTypes.Requireable<{
        [x: string]: string | null | undefined;
    }>;
    body: PropTypes.Requireable<string>;
    cache: PropTypes.Requireable<string>;
    width: PropTypes.Requireable<number>;
    height: PropTypes.Requireable<number>;
    scale: PropTypes.Requireable<number>;
}> | (PropTypes.InferProps<{
    uri: PropTypes.Requireable<string>;
    bundle: PropTypes.Requireable<string>;
    method: PropTypes.Requireable<string>;
    headers: PropTypes.Requireable<{
        [x: string]: string | null | undefined;
    }>;
    body: PropTypes.Requireable<string>;
    cache: PropTypes.Requireable<string>;
    width: PropTypes.Requireable<number>;
    height: PropTypes.Requireable<number>;
    scale: PropTypes.Requireable<number>;
}> | null | undefined)[]>;
export default ImageSourcePropType;
