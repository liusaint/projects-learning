var webpack = require('webpack');
//提取所有模块的公共引用部分到一个模块。命名为common.js
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');

module.exports = {
	//插件项
	plugins: [commonsPlugin],
	//页面入口配置
	entry: {
		a: './src/js/a/a.js',
		b: './src/js/b/b.js'
	},
	// 入口文件输出配置
	output: {
		path: 'build/js',
		// filename: '[name]-[hash].js',
		filename: '[name].js'
	},
	module: {
		//加载器配置
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader?presets[]=es2015,presets[]=stage-0'
		}, {
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader', ]
		}, {
			test: /\.less/,
			loaders: ['style-loader', 'css-loader', 'less-loader'],
		}]
	},
	// //其它解决方案设置
	// rosolve: {

	// }


}