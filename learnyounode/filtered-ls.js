const fs = require("fs");
fs.readdir(process.argv[2], (err, list) => {
  if (err) return console.log(err);
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].split(".")[1] === process.argv[3]) {
      result.push(list[i]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
});

/*
official solution:

const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
    }
    })
})
*/
