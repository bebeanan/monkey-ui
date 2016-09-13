var path = require('path');
var webpack = require('webpack');
var  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
	  index : [
      './demo/js/index.js'],
    vendors :['react','react-dom']
  },
  output: { 
    path: path.join(__dirname, "dist"),
    filename: '/js/[name].js'
  },
  resolve: {
        extensions: ['', '.js', '.jsx']
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
      },
      {
        test: /\.css$/,
        loader: "react-hot!style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors','/js/vendors.js'),
    new webpack.NoErrorsPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
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