const fs = require("fs");

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    let result = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].split(".")[1] === ext) {
        result.push(list[i]);
      }
    }

    callback(null, result);
  });
};
