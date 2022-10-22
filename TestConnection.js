require("dotenv").config();
const envVariables = process.env;
const mysql = require("mysql");

const { SQL_HOST, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_PORT } =
  envVariables;

const con = mysql.createConnection({
  host: SQL_HOST,
  user: SQL_USER,
  database: SQL_DATABASE,
  password: SQL_PASSWORD,
  port: SQL_PORT,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
