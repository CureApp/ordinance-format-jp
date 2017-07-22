const path = require('path');

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
    rules: [{
        test: /\.js$/,
        enforce: 'pre',
        use: ['remove-flow-types-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test/spec'),
        ]
    }]
  }
};
