const express = require('express');
const data = require('../database.json');

const app = express();
app.use(express.json());

let file = data;

app.get('/users', (req:any, res:any) => {
    res.send(data);
});

app.post('/users', (req:any, res:any) =>{
    let user = {
        nome: req.body.nome,
        idade: req.body.idade,
        cidade: req.body.cidade
    }
    file.push(user);

    return res.send("Dados inseridos com sucesso");
});

app.put('/users', (req:any, res:any) =>{
    let alter ={
        nome: req.params.nome,
        idade: req.params.idade,
        cidade: req.params.cidade
    }
    return res.send(`Altera item ${alter.nome}`);
    
})

app.listen(3000, () => console.log(`Running on port 3000`));

