const routes = require('./routes.js');
const resource = require("./resource.json");
const express = require('express')
const app = express()
const port = 3000
app.use("/life", routes);

app.get('/', async(req, res) => {
    var pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/litten").then((data) => data.json())
    console.log(pokemon);
    res.send(pokemon)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})