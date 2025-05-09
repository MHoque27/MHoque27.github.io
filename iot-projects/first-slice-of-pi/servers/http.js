const express = require('express'),
	cors = require('cors');
	

module.exports = app;
var app = express();
app.use(cors());
app.get("/", function (req, res) {
	res.send("Root of device successfully connected to")
});
app.get("/pi", function (req, res) {
	res.send("Pi gateway successfully connected to")
});

// I have looked through all the files
module.exports = app;