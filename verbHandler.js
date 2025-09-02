const http = require("http");
const port = 3000;

var data = "";
var secret = "My kitty cat is kind of chubby";

http.createServer(function (req, res) { 
    if (req.method === "GET") {
        //set status code to 200 and content type to text/plain
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        //respond with secret
        res.end(secret);
    } else if (req.method === "DELETE") {
        secret = null;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("secret deleted")
    } else if (req.method === "PUT") {
        req.on();("data", function(chunk) {
            secret += chunk.toString;
        });

        req.on("end", function () {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(secret);
        })
    } else if (req.method === "POST") {
        req.on(); ("data", function (chunk) {
            const incomingData = chunk.toString()
            list.push(incomingData);
        });
    } else {

    }

}).listen(port)



//OPTIONAL!!!
console.log("Listening on port" + port);
console.log(`http://localhost:'${port}`);