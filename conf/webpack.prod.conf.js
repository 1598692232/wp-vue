/**
 * Created by EX-pengzhiliang001 on 2017-05-31.
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
function resolve (dir) {
	return path.join(__dirname, '/', dir)
}
module.exports = {
	entry: path.resolve(__dirname, '../app/index.js'),
	output: {
		path: __dirname,
		filename: '[name].js',
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader?presets=es2015',
				exclude: /node_modules/
			}
		],
	},
	vue: {
		loaders: {
			css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader')
		}
	},
	plugins: [
		new ExtractTextPlugin('../output/static/css/style.css', {
			allChunks: true,
		}),
	],
};
