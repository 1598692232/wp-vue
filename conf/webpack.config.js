/**
 * Created by EX-pengzhiliang001 on 2017-05-31.
 */
	// nodejs 中的path模块
var path = require('path');
var webpack=require('webpack')
function resolve (dir) {
	return path.join(__dirname, '/', dir)
}
module.exports = {
	// 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
	entry: {index:[__dirname+'/dev-client',path.resolve(__dirname, '../demo/index.js')]},
	// 输出配置
	output: {
		// 输出路径是 myProject/output/static
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].js',
		chunkFilename: '[id].[chunkhash].js'
	},
	resolve: {
		extensions: ['.es6', '.js', '.vue'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src'), resolve('demo')],
				exclude: /node_modules/,
				options: {
					configFile:'./eslintrc.js',
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader?presets=es2015',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}


// var path = require('path');
// var webpack = require('webpack');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
// var ROOT_PATH = path.resolve(__dirname);
// var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
// var APP_PATH = path.resolve(ROOT_PATH, 'app');
//
// module.exports = {
// 	entry: {app: path.resolve(APP_PATH, 'app.js')},
// 	output: {path: BUILD_PATH, filename: '[name].bundle.js'},
// 	resolve: {extensions: ['', '.js', '.jsx'], root: APP_PATH},
// 	module: {
// 		preloaders: [{test: /\.js?$/, loaders: ['eslint'], include: APP_PATH}],
// 		loaders: [{test: /\.js?$/, loaders: ['babel-loader'], include: APP_PATH}]
// 	},
// 	plugins: [newHtmlwebpackPlugin({title: 'demo', filename: 'index.html'}),]
// }

//    "build": "webpack --display-modules --display-chunks --config conf/webpack.conf.js",
//    "dev": "node conf/dev-server.js"


