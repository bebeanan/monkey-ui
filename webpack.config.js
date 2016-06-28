var path = require('path');
var webpack = require('webpack');
var  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
	  index : [
      'webpack-dev-server/client?http://localhost:8080', 
      'webpack/hot/only-dev-server',
      './demo/js/index.js'],
    vendors :['react','react-dom']
  },
  output: { 
    path: './dist',
    filename: '/js/[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,loader: 'babel-loader',
        exclude: /node_modules/,
        query: {presets: ['es2015', 'react']}
      },
      {
        test: /\.less$/,
        loader: "react-hot!style-loader!css-loader!less-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors','/js/vendors.js'),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template : "demo/templates/index.html",
      version : "1",
      inject : false
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false
      }
    })
    // ,
    // new webpack.DefinePlugin({
    //   "process.env": { 
    //     NODE_ENV: JSON.stringify("production") 
    //   }
    // })
  ]
};