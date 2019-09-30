const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry:'./client/index.js',
  devtool: 'cheap-module-source-map',
    resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    port: 4000,
    stats: { children: false, maxModules: 0 }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin(
    { template: 'index.html' }
  )
  ],
};
