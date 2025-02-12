// fetchServer.js file
const http = require("http");
const port = 1337;

http
    .createServer(async function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        var fetchResponse = await fetch("https://MHoque27.github.io");
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
