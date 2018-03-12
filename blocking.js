var fs = require("fs");

var data = fs.readFileSync('node.txt');

console.log(data.toString());
console.log("Program Ended");