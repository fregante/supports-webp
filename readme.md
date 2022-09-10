# supports-webp [![][badge-gzip]][link-bundlephobia]

> Detect support for WEBP images in the browser in 0.3KB

[badge-gzip]: https://img.shields.io/bundlephobia/minzip/supports-webp.svg?label=gzipped
[link-bundlephobia]: https://bundlephobia.com/result?p=supports-webp

## Install

You can download the [standalone bundle](https://bundle.fregante.com/?pkg=supports-webp) and include it in your `manifest.json`.

Or use `npm`:

```sh
npm install --save supports-webp
```

## Usage

```js
import supportsWebP from 'supports-webp';
// supportsWebP is a Promise

supportsWebP.then(supported => {
	if (supported) {
		console.log('Load WebP!');
	} else {
		console.log('Load JPEG!');
	}
});

// Or if you can use async/await:
if (await supportsWebP) {
	console.log('Load WebP!');
} else {
	console.log('Load JPEG!');
}
```
