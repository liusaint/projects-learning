module.exports = {
	entry: {
		a: './src/js/a/a.js',
		b:'./src/js/b/b.js'
	},
	output: {
		path: 'build/js',
		// filename: '[name]-[hash].js',
		filename: '[name].js'
	}
}