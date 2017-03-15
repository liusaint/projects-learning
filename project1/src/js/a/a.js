define(function() {
	
	//入口文件中导入一个less
	require('../../less/a.less');

	var aa = require('./aa');
	var com = require('../com');

	var res = {
		name: 'a',
		a() {
			console.log(2);
		},
		aa: aa,
		com: com
	}

	return res;
})