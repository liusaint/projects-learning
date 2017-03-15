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
			loaders: ['style-loader', 'css-loader', 'autoprefixer-loader']
		}, {
			test: /\.less/,
			loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader'],
		}]
	},
	//其它解决方案设置
	//定义了解析模块路径时的配置，常用的就是extensions; 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全。
	rosolve: {
		extensions: ['', '.js', '.jsx'],
		// 模块别名定义，方便后续直接引用别名，无须多写长长的地址
		alias:{

		}
	}


}