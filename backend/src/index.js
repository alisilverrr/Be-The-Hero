const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
*    Métodos HTTP:
*
*    -GET: Buscar informação no back-end
*    -POST: Criar informação no back-end
*    -PUT: Alterar informação no back-end
*    -DELETE: Deletar informação no back-end

*/

/*
*    Tipos de parâmetros:
*
*    Query params: Parâmetros nomeados enviadis na rota após "?" (filtros, paginação)
*    Route params: Parãmetros utilizados para identificar recursos
*    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/*
* Driver: SELECT * FROM users
* Query builder: table('users').select('*').where()
*/



app.listen(3333);