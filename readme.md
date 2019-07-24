# supports-webp

> Detect support for WEBP images in the browser in 0.3KB

[![gzipped size](https://badges.herokuapp.com/size/github/fregante/supports-webp/master/dist/supports-webp.min.js?gzip=true&label=gzipped%20size)](#readme)
[![Travis build status](https://api.travis-ci.org/fregante/supports-webp.svg?branch=master)](https://travis-ci.org/fregante/supports-webp)
[![gzipped size](https://img.shields.io/npm/v/supports-webp.svg)](https://www.npmjs.com/package/supports-webp)

## Usage with npm and ES2015

```sh
npm install --save supports-webp
```
```js
import supportsWebP from 'supports-webp';
// supportsWebP is a Promise

supportsWebP.then(supported => {
	if (supported) {
		console.log('Load WebP!')
	} else {
		console.log('Load JPEG!')
	}
});

// Or if you can use async/await:
if (await supportsWebP) {
	console.log('Load WebP!')
} else {
	console.log('Load JPEG!')
}
```

## Usage without build tools

Copy the content of the file `dist/supports-webp.min.js` into your code, don't load that file separately, it's too small. Then:

```js
window.supportsWebP.then(supported => {
	if (supported) {
		console.log('Load WebP!')
	} else {
		console.log('Load JPEG!')
	}
});
```
