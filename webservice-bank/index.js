const express = require("express");
const mysql = require("mysql");

const app = express();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bank"
});

connection.connect();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
