const express = require("express");
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.send('Olá, Tudo bem com você?');
});

app.listen(port , () =>{
    console.log(`App esta ouvindo a porta ${port}`)
});