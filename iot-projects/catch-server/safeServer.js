const http = require("http");
const port = 3000;

var serverStatus = undefined;
function requestFunction(req, res) {
    try {
        if (req.method === "GET") {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(serverStatus.message);
            return;
        } else if (req.method === "DELETE") {

        } else if (req.method === "PUT") {
            var body = "";
            req.on('data', (stream) => {
                            console.log({stream})

                body += stream.toString();
            });
            req.on('end', (stream) => {
                serverStatus = {};
                console.log(body)
                serverStatus = JSON.parse(body);
            });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
                            res.write("The server has been updated.");

        } else if (req.method === "POST") {
        
        } else {

        }
    } catch {
        res.write("The server has no data.");
    } finally {
        res.write("-and the message arrived");
        res.end();
    }
    
}
const server = http.createServer(requestFunction).listen(port);
