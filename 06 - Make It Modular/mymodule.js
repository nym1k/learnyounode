var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, list){
    if (err) {
      callback(err);
    } else {
      //return list of files
      var filteredList = list.filter(function (item) {
        return path.extname(item) == '.' + ext
      });
      callback(null, filteredList);
    }
  });
}
