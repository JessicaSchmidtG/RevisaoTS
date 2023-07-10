## Conceitos
# API (Application Programming Interface / Interface de programação de aplicativos)
```
- um conjunto de especificações que definem de que forma as aplicações irão se comunicar
- conjunto de regras e protocolos para que diferentes softwares interajam entre si
- interface para que um sistema se comunique com outro sistema
- faz o meio de campo (comunicação) entre o usuario e o software (ex: garçon de restaurante)
```
# REST (Representational State Transfer / Transferencia Representacional de Estado)
```
- Restrição de arquitetura
- Conjuntos de regras e convenções que permite que 2 sistemas se comuniquem pela internet
- A arquitetura REST separa o beckend do frontend
```
# RESTFUL
```
- Utiliza metodos HTTP
- Especialmente util para aplicações em nuvem
- Capacidade de aplicar os principios do REST
- 
```
# Maturidade de modelo REStful
```
Nível 0
-A API precisa utilizar o protocolo HTTP para a comunicação 
Nível 1
- A API deve possuir mapeamento de resurso bem definidos.
Representando substantivos que fazem a correta utilização das URLs para os recursos respectivos
Nível 2
- A API deve utilizar o protocolo HTTP de forma semântica com seus verbos (GET, DELETE, PUT, POST) de acordo com a requisição.
Nível 3
- A API deve mostrar o seu estado atual de relacionamento com os demais recursos da API
```
# JSON ( JavaScript Object Notation / Notação de objeto em JavaScript)
```
- Padrão de dados
- estruturar dados em formato de texto e permitir a troca de dados entre aplicações de forma simples, leve e rápida
```
# Requisições HTTP
```
-O protocolo HTTP define um conjunto de métodos de requisição responsável por indicar a ação a ser executada para um dado recurso.
- GET, PUSH, DELETE, PUT, PATCH
```
# Headers HTTP
```
- campo para envio de informações adicionais (normalmente formatação ou autorização) que não tem relação com os dados em si: Athorization, Content Type, Accept
```
# HTTP Codes
```
- 100 - 199: Informativos
- 200 - 299: Sucesso
- 300 - 399: Redirecionamento
- 400 - 499: Erros do cliente
- 500 - 599: Erros de servidor
```
# Framework
```
- biblioteca
- Reune varios projetos provendo uma funcionalidade generica
```
# ExpressJS
```
- Framework para nodeJS
- Fornece os recursos minimos para construção de servidores web

```