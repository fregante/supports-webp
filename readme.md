# supports-webp

> Instantly detect support for WEBP images in the browser in 0.2KB

[![gzipped size](https://badges.herokuapp.com/size/github/bfred-it/supports-webp/master/dist/supports-webp.min.js?gzip=true&label=gzipped%20size)](#readme)
[![Travis build status](https://api.travis-ci.org/bfred-it/supports-webp.svg?branch=master)](https://travis-ci.org/bfred-it/supports-webp)
[![gzipped size](https://img.shields.io/npm/v/supports-webp.svg)](https://www.npmjs.com/package/supports-webp) 

## Usage with npm and ES2015

```sh
npm install --save supports-webp
```
```js
import supportsWebP from 'supports-webp';

console.log(supportsWebP); // true or false
if(supportsWebP) {
	// do something with WebP
}
```

## Usage without build tools

Copy the content of the file `dist/supports-webp.min.js` into your code, don't load that file separately, it's too small. Then:

```js
console.log(window.supportsWebP); // true or false
if(window.supportsWebP) {
	// do something with WebP
}
```

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
