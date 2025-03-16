const http = require("http");

const url = process.argv[2]
// official solution:
http
  .get(process.argv[2], function (response) {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
  })
    .on("error", console.error);
  
// my solution:
// http
//   .get(url, (res) => {
//     const { statusCode } = res;

//     let error;
//     if (statusCode !== 200) {
//       error = new Error("Request Failed.\n" + `Status Code: ${statusCode}`);
//     } 
//     if (error) {
//       console.error(error.message);
//       // Consume response data to free up memory
//       res.resume();
//       return;
//     }

//     res.setEncoding("utf8");
//     let rawData = "";
//     res.on("data", (chunk) => {
//       rawData += chunk+"\n";
//     });
//     res.on("end", () => {
//       try {
//         console.log(rawData);
//       } catch (e) {
//         console.error(e.message);
//       }
//     });
//   })
//   .on("error", (e) => {
//     console.error(`Got error: ${e.message}`);
//   });