/*! npm.im/supports-webp 1.0.5 */
var supportsWebP = (function () {
'use strict';

var canvas = typeof document === 'object' ? document.createElement('canvas') : {};
canvas.width = canvas.height = 1;
var index = canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;

return index;

}());
