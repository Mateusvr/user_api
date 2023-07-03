const express = require('express');
const app = express();
const port = 3000;
const users = require('./data/users.json')

app.get('/', (req, res) => {
    res.send('Servidor Rodando!');
});

app.get('/users', (req, res) => {
    res.send(users).json()
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});