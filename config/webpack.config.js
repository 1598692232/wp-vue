/**
 * Created by EX-pengzhiliang001 on 2017-05-31.
 */
	// nodejs 中的path模块
var path = require('path');
function resolve (dir) {
	return path.join(__dirname, '/', dir)
}
module.exports = {
	// 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
	entry: {index:[__dirname+'/dev-client',path.resolve(__dirname, '../app/index.js')]},
	// 输出配置
	output: {
		// 输出路径是 myProject/output/static
		path: path.resolve(__dirname, '../output/static'),
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

		loaders: [
			// 使用vue-loader 加载 .vue 结尾的文件
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader?presets=es2015',
				exclude: /node_modules/
			}
		]
	}
}