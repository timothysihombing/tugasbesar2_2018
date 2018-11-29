const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bank"
});

connection.connect();

app.post("/customers", (req, res) => {
  // Check is card number valid (no one has it)
  connection.query(
    `SELECT * FROM customers WHERE card_number = ${req.body.card_number}`,
    (err, rows, fields) => {
      if (err) return res.status(500).send("Error when check card number");

      if (rows.length == 1)
        return res.status(400).send("Card number already exists");

      // Add new customer to database
      connection.query(
        `
        INSERT INTO customers (name, card_number) 
        VALUES ('${req.body.name}', '${req.body.card_number}')
      `,
        (err, rows, fields) => {
          if (err) return res.status(500).send("Error when add new customer");

          res.send("User added");
        }
      );
    }
  );
});

app.post("/transactions", (req, res) => {
  // Check if card number of sender and receiver is exist
  // Check if amount is <= sender balance
  // Decrease sender balance by amount
  // Add new transaction to database
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
