# ImgMin

Simple Image optimizer (use sharp, svgo)

```js
// usage

import ImgMin from './ImgMin.mjs';

const data = {
  src: ['./src/**/*.{jpg,jpeg,png,svg}', '!**/_*/**'],
  dest: './dist',
  option: {
    base: './src',
    cacheDir: './.cache/images',
    isWebp: true,
    webpExt: ['.jpeg', '.jpg', '.png', '.gif'],
  },
}

new ImgMin(data).run();

```
