/*! npm.im/supports-webp */
var supportsWebP=function(){"use strict";var t=document.createElement("canvas");t.width=t.height=1;return t.toDataURL&&5===t.toDataURL("image/webp").indexOf("image/webp")}();
