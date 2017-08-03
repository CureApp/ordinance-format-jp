const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['babel-loader','remove-flow-types-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test/spec'),
        ]
      },
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    ],
  },
  plugins: [
    new webpack.BannerPlugin({banner: '#!/usr/bin/env node', raw: true})
  ],
};
