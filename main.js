var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

  var x = 0;
  var ans = 1;

	while(x < 5){
    ans *= x;
    x++;
  }

   // Send the response body as "Hello World"
   response.end(ans + "\n");
}).listen(5000);

// Console will print the message
console.log('Server running at http://127.0.0.1:5000/');