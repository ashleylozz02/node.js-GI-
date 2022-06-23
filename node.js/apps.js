 const logger = require("./logger");
 logger.log("messages");
//++

 const path = require("path");

 const pathObj = path.parse(__filename);
 console.log(pathObj);
//++

 const os = require("os");

 const totalMemory = os.totalmem();
 const freeMemory = os.freemem();
 console.log(`total Memory: ${totalMemory}`);
//++
 const http = require("http");

 const server = http.createServer(function (req, res) {
   if (req.url === "/") {
     res.write("Hello it worked");
    res.end();
   }
   if (req.url === "/api/courses") {
     res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
 });

 server.on("connection", (socket) => {
   console.log("new connection");
 });

 server.listen(3000);

 console.log("listening on port 4000...");

 var fs = require("fs");

 function readData(err, data) {
   console.log(data);
 }

 fs.readFile("solarsystem.txt", "utf8", readData);