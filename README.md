# ImgMin

Simple Image optimizer (use sharp, svgo)

```js
// usage

import ImgMin from './ImgMin.mjs';

const data = {
  src: ['./src/**/*.{jpg,jpeg,png,svg}', '!**/_*/**'],
  dest: './dist',
  option: {
    base: './src', // base path
    cacheDir: './.cache/images', // cache directory
    isOriginOutput: true, // original format compress enable
    format: ['webp','avif'], // modern format 'webp','avif'

    // Sharp Output options
    // https://sharp.pixelplumbing.com/api-output
    png: { quality: 80 },
    jpg: { quality: 80 },
    webp: { quality: 80, smartSubsample: true },
    avif: { quality: 80 },
  },

  // Custom options by files
  custom: {
    './src/img.png': { webp: { lossless: false, nearLossless: true } },
  },
}

new ImgMin(data).run();

```
