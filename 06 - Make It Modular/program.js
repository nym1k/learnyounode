//Require both the filesystem and path modules
var mymodule = require('./mymodule');

//Save the folder and ext arguements to variables
var folder = process.argv[2];
var ext = process.argv[3];

function resultHandler(err, data){
  if (err) {
    console.error(err);
  } else {
    data.forEach(function(item){
      console.log(item);
    });
  }
}

// Read the folder directory
mymodule(folder, ext, resultHandler);
