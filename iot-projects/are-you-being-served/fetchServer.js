// fetchServer.js file
const http = require("http");
const port = 1337;
var args = process.argv.slice(2);
http
    .createServer(async function (req, res) {
        console.log(args);
        var url = args[0] ? args[0] : "<a default url>";
        if (args[1] == "text/html") {
            res.writeHead(200, { "Content-Type": "text/html" });
        } else if (args[1] == "text/plain") {
            res.writeHead(200, { "Content-Type": "text/plain" });
        }

        var fetchResponse = await fetch(url);
        if (fetchResponse.ok == true) {
            html = await fetchResponse.text();
            res.write(html);
            res.end()
        } else {
            res.write(fetchResponse.statusText);
            res.write(fetchResponse.status);
            res.end();
        }
        
    })
    .listen(port);
