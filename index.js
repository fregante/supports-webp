const canvas = document.createElement('canvas');
canvas.width = canvas.height = 1;
export default canvas.toDataURL && canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
