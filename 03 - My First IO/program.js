// Require the filesystem module
var fs = require('fs');
// Grab the third arguement and save it in a variable
var file = process.argv[2];
// Grab the file buffer data and save it as a string
var str = fs.readFileSync(file).toString();
// Split the string by line breaks
var array = str.split('\n');
// Log the amount of items in the array -1 to the console
console.log(array.length - 1);
