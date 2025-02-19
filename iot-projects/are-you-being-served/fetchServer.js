// fetchServer.js file
const http = require("http");
const port = 1337;
var args = process.argv.slice(2);
http
    .createServer(async function (req, res) {
        var url = args[0] ? args[0] : "<a default url>";
        res.writeHead(200, { "Content-Type": "text/html" });
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
