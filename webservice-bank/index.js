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

app.post("/customer", (req, res) => {
  // Check is card number valid (no one has it)
  // Add new customer to database
});

app.post("/transaction", (req, res) => {
  // Check if card number of sender and receiver is exist
  // Check if amount is <= sender balance
  // Decrease sender balance by amount
  // Add new transaction to database
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
