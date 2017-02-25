// Require http module
var http = require('http');
// Set third argument as variable
var url = process.argv[2];

// HTTP request with url, callback function to handle response
http.get(url, function(response){
  // set encoding of repsonse to utf-8
  response.setEncoding("utf-8");
  // on data event, console.log the data returned
  response.on("data", function(data){
    console.log(data);
  });
  // if there's an error, log it to the console
  response.on('error', console.error)
}).on('error', console.error);
