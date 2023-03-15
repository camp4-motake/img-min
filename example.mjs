import ImgMin from './ImgMin.mjs';

/**
 * compress image & webp generate
 */
new ImgMin({
  src: ['./src/**/*.{jpg,jpeg,png,svg}', '!**/_*/**'],
  dest: './dist',
  option: {
    base: './src',
    cacheDir: './.cache/images',
  },

  /**
   * custom sharp webp config
   * https://sharp.pixelplumbing.com/api-output#webp
   */
  custom: {
    './src/400x400.png': { webp: { lossless: false, nearLossless: true } },
  },
}).run();
