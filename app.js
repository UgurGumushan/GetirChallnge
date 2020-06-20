const express = require('express');
const app = express();
const port = 3000;

function greet() {
    return "Hello";
}

app.post('/', (req, res) => res.send(greet()));
app.get('/', (req, res) => res.send(greet()));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
