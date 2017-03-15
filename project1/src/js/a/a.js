define(function() {

	var aa = require('./aa');
	var com = require('../com');

	var res = {
		name: 'a',
		a() {
			console.log(1);
		},
		aa: aa,
		com: com
	}
console.log(res);
	return res;
})