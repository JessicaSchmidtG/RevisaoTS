npm init -y
# Abrir pasta
cd + nome da pasta
# criar arquivo 
nano + nome_do-arquivo.tipo_do_arquivo
# salvar arquivo
ctrl + o
# sair
ctrl + x
# instalar express
npm i express
# instalar pacote mysql
npm i mysql2
# instalar nodeon
npm i nodemon -D
# instalar dotenv
npm i dotenv
# Para não subir arquivos para o github (git ignore)
na raiz da pasta cria novo arquivo .gitignore
passa o caminho do arquivo que não quer que ele não suba pro github (backend/node_modules)
# configurar eslint
npx eslint --init
-seleciona ultima opção
-CommonJS
-None of these
-No
-Node
-use a popular style guide
-Standard:
-JSON
-yes
-npm
(criou arquivo .eslintrc.json na pasta raiz)
# cria nova pasta com nome src dentro da pasta backend(onde esta a pasta de arquivos a serem ignorados)
dentro da pasta src cria um arquivo com nome index.js
# instanciar a variavel express
const express = require("express");
const app = express();
app.listen(3333, () => {console.log('Running on port 3333')});
# abre package.json e cria start no script
coloca a "," no final da linha escrito teste,e adiciona abaixo
"start": "node ./backend/src/index.js" 
# verificar se esta rodando
npm start
# criar uma rota (requisição http, requisição de dados) escreve no arquivo index.js
app.get('/', (request, response)=>{
    response.status(200).send("Aprendendo a programar")})
da npm start
abre no navegador "localhost:3333/"
vai aparecer a frase que escreveu no app.get
# para não precisar mais ficar dando start para rodar
no arquivo package.jason em scripts coloca um "," no fim do start e na linha abaixo coloca
"dev": "nodemon ./backend/src/index.js"
# Para dar uma organizada nas pastas 
na pasta src cria novo arquivo chamado app.js
neste arquivo app.js vamos colocar nossas requisições http(copia do index.js e cola no app.js)
no app.js escreve module.exports = app;
# renomeia arquivo index.js para server.js
escreve na primeira linha 
"const app = require('./app');"
# atualiza package.json 
dentro do package.jason muda onde esta index.js por server.js
# Organizar rotas (url que acessamos)
criar mais um arquivo na pasta src chamado router.js
# escrever no router.js
const express = require("express");
const router = express.Router();
module.exports = router;
# escrever no app.js
linha 2 "const router = require('./router');"
linha 6 "app.use(router);"
recorta o .get do app.js e cola no router e substitui o app.get por router.get

