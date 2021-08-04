const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the home page Justyna on EB version deploy approval!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzappppp");
});
