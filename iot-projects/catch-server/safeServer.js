const http = require("http");
const port = 3000;

var serverStatus = undefined;
function requestFunction(req, res) {
    try {
        if (req.method === "GET") {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(serverStatus);
            return;
        } else if (req.method === "DELETE") {

        } else if (req.method === "PUT") {
        
        } else if (req.method === "POST") {
        
        } else {

        }
    } catch {
        res.writeHead(500, { 'Content-type': "text/plain" });
        res.write("The server has no data.");
    } finally {
        res.write("-and the message arrived");
        res.end();
    }
    
}
const server = http.createServer(requestFunction).listen(port);
