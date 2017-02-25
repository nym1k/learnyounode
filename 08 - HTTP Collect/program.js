// Require http and bl modules
var http = require('http');
var bl = require('bl');

// Grab url and save in to var
var url = process.argv[2];

// http request, take response and pipe to bl
http.get(url, function(response){
  response.pipe(bl(function(err, data) {
    // if error, throw error
    if (err) {
      return console.error(err);
    } else {
      // else save data as string to variable
      var str = data.toString();
      // log length of string
      console.log(str.length);
      // log string
      console.log(str);
    }
  }));
});
