const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const postcssURL = require('postcss-url');

module.exports = {
   plugins: [
      tailwindcss(),
      postcssPresetEnv({
         features: {
            'nesting-rules': true,
            'custom-media-queries': true,
            'media-query-ranges': true,
         },
      }),
      postcssURL({ url: 'copy', useHash: true }),
      postcssNested(),
      cssnano({
         preset: [
            'advanced',
            {
               discardUnused: false,
            },
         ],
      }),
   ],
};
