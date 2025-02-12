const http = require("http");
const port = process.argv[2];
http.createServer(function (request, response) {
    // handle response
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('This is a message');
    response.write('             ________');
    response.write('            |meow :3 |');
    response.write('            | _______|')
    response.write('   /\ _ /\  |/')
    response.write('  / o   o \.');
    response.write('=(    ^    )=   _');
    response.write('  \       /    / \.');
    response.write('  /       \   /   \.');
    response.write(' | U     U | /');
    response.write(' |         |/');
    response.write(' |         |  ');
    response.write('  \_______/');

    response.end('World!');
}).listen(port);

