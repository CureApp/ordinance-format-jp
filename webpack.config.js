const path = require('path');
const webpack = require('webpack');

const nodeConfig = {
  target: 'node',
  entry: './bin/cli.js',
  output: {
    filename: 'command.js',
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
        use: ['babel-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.resolve(__dirname, "node_modules")
        ],
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
}

const webConfig = {
  target: 'web',
  entry: './demo/js/demo.js',
  output: {
    filename: 'demo.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['babel-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'demo'),
          path.resolve(__dirname, "node_modules"),
        ],
      },
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    ],
  }
}

module.exports = [ nodeConfig, webConfig ]
