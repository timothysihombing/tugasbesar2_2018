const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bank"
});

connection.connect();

connection.query(`
    CREATE TABLE customers (
      id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
      name VARCHAR(50) NOT NULL, 
      card_number VARCHAR(20) NOT NULL, 
      balance DOUBLE(12, 3) NOT NULL
    )
`);

connection.query(`
    CREATE TABLE transactions (
      id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      sender_cardnumber VARCHAR(20) NOT NULL,
      receiver_cardnumber VARCHAR(20) NOT NULL,
      amount INT NOT NULL,
      timestamp DATETIME NOT NULL
    )
`);

connection.end();