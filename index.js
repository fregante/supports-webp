export default (canvas => {
	canvas.width = canvas.height = 1;
	return canvas.toDataURL && canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
})(document.createElement('canvas'));
