const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    loadPage: './src/loadPage.js',
    home: './src/home.js'
    //menu: './src/menu.js',
    //contact: './src/contact.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    host: '', // in this section, enter IP address of remote dev server
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Restaurant Page',
      content: 'class="content"',
      template: './src/template_index.html',
      filename: './index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
