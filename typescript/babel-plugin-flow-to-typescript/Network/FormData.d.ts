declare type FormDataValue = any;
declare type FormDataNameValuePair = [string, FormDataValue];
declare type Headers = {
    [name: string]: string;
};
declare type FormDataPart = {
    string: string;
    headers: Headers;
} | {
    uri: string;
    headers: Headers;
    name?: string;
    type?: string;
};
/**
 * Polyfill for XMLHttpRequest2 FormData API, allowing multipart POST requests
 * with mixed data (string, native files) to be submitted via XMLHttpRequest.
 *
 * Example:
 *
 *   var photo = {
 *     uri: uriFromCameraRoll,
 *     type: 'image/jpeg',
 *     name: 'photo.jpg',
 *   };
 *
 *   var body = new FormData();
 *   body.append('authToken', 'secret');
 *   body.append('photo', photo);
 *   body.append('title', 'A beautiful photo!');
 *
 *   xhr.open('POST', serverURL);
 *   xhr.send(body);
 */
declare class FormData {
    _parts: Array<FormDataNameValuePair>;
    constructor();
    append(key: string, value: FormDataValue): void;
    getParts(): Array<FormDataPart>;
}
