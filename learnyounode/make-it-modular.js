const mymodule = require("./mymodule")

const folder = process.argv[2]
const ext = process.argv[3]

const result = mymodule(folder, ext, (err, data) => {
    if (err) return console.log(err);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
})