/**
 * Created by EX-pengzhiliang001 on 2017-05-31.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack')
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),

	new HtmlWebpackPlugin({
		filename: 'app/index/index.html',
		template: path.resolve(__dirname, '../index.html'),
		inject: true
	})
];

// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './conf/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
	var extras = [devClient]
	config.entry[name] = extras.concat(config.entry[name])
})


module.exports = config;