const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/vue-webpack4',
    options: {}
  },
  core: {
    builder: 'webpack4'
  },
  docs: {
    autodocs: true
  },
  staticDirs: ['../static', '../assets'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader'
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@use "assets/scss/foundation/_variables.scss" as *;
@use "assets/scss/foundation/_mixin.scss" as *;`,
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, '../'),
                path.resolve(__dirname, '../assets/scss')
              ]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'raw-loader'
        }
      ]
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: '[name].[ext]',
            outputPath: 'static/',
            publicPath: '/static/'
          }
        }
      ]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
      '~': path.resolve(__dirname, '../'),
      'assets': path.resolve(__dirname, '../assets'),
      'vue$': 'vue/dist/vue.esm.js'
    };

    config.plugins.push(new VueLoaderPlugin());

    return config;
  },
};
