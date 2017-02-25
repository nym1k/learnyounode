//Require both the filesystem and path modules
var fs = require('fs');
var path = require('path');

//Save the folder and ext arguements to variables
var folder = process.argv[2];
var ext = '.' + process.argv[3];

// Read the folder directory
fs.readdir(folder, function (err, list) {
  // If there's an error then log it
  if (err) return console.error(err);
  // Filter the data, and run a function on each item
  list.filter(function (item) {
    // if the extname of the item matches the ext variable
    if (path.extname(item) == ext) {
      // Log that item to the console
      console.log(item);
    }
  });
});
