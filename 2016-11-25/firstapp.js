http = require('http');

//create server
http.createServer(function (request, response) {
	//send the HTTP header
	//http status :200 :ok
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'})

	//send the response body as 'hello world'
	response.end('hello world \n');
}).listen(8081);

//console will print the message
console.log('server running at http://127.0.0.1:8081/');

