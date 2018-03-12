// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('node.js', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write(data);
//     res.end();
//   });
// }).listen(5000);

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('node.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(5000);

// fs.open('hello.txt', 'w', function (err, file) {
//   if (err) throw err;
// });
//
// fs.appendFile('hello.txt', 'Hello World!', function (err) {
//   if (err) throw err;
// });
//
// fs.writeFile('hello.txt', 'Hello World!', function (err) {
//   if (err) throw err;
// });
//
// fs.unlink('hello.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });
//
// var fs = require('fs');
// var rs = fs.createReadStream('./hello.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });