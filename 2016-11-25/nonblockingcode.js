var fs = require('fs');

fs.readFile('static/input.txt', function(err, data) {
	if(err)
		return console.error(err);
	console.log(data.toString());
});
console.log('program Ended');

