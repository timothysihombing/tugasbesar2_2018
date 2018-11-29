const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());
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

app.post("/customer", (req, res) => {});

app.post("/transaction", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
