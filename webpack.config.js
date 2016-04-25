module.exports = {
  entry: './src/main.js',
  output: {
    path: './src/',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './src',
    host: '0.0.0.0',
    port: 8000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
