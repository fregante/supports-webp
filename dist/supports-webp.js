/*! npm.im/supports-webp 1.0.4 */
var supportsWebP = (function () {
'use strict';

var canvas = document.createElement('canvas');
canvas.width = canvas.height = 1;
var index = canvas.toDataURL && canvas.toDataURL('image/webp').indexOf('image/webp') === 5;

return index;

}());
