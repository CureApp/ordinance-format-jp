const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin')


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
        use: ['remove-flow-types-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test/spec'),
        ]
      },
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CircularDependencyPlugin({
      // exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true
    })
  ]
};
