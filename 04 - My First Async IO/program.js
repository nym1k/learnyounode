// Require the filesystem module
var fs = require('fs');
// Grab the file from the arguments
var file = process.argv[2];
fs.readFile(file, 'utf8', function callback (err, data) {
  if (!err) {
    console.log(data.split('\n').length - 1);
  } else {
    console.log(err);
  }
});
