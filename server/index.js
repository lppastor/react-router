var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "react_testes.mysql.dbaas.com.br",
  user: "react_testes",
  password: "ayadb22",
  database: "react_testes",
});

/*var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestao_001",
});*/

connection.connect();

connection.query(
  "SELECT * FROM administracao",
  function (error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results[0]);
  }
);

connection.end();
