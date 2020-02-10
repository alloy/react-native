'use strict';;
import binaryToBase64 from '../Utilities/binaryToBase64';
import Blob from '../Blob/Blob';
import FormData from './FormData';

export type RequestBody = string | Blob | FormData | {uri: string;} | ArrayBuffer | $ArrayBufferView;

function convertRequestBody(body: RequestBody): any {
  return null as any;
}

export default convertRequestBody;;
