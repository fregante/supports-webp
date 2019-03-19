/*! npm.im/supports-webp 1.0.7 */
var supportsWebP = (function () {
'use strict';

var index = new Promise(function (resolve) {
	var image = new Image();
	image.onerror = function () { return resolve(false); };
	image.onload = function () { return resolve(image.width === 1); };
	image.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD';
}).catch(function () { return false; });

return index;

}());
