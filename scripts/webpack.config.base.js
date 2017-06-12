const path = require('path')
const src = path.resolve(__dirname, '../src')
const dist = path.resolve(__dirname, '../dist')

module.exports = {
  context: src,
  entry: {
    main: './main.js'
  },
  output: {
    path: dist,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            esModule: true
          }
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        enforce: 'pre',
        test: /\.scss$/,
        use: 'sass-loader'
      }
    ]
  }
}
