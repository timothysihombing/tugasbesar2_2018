const express = require("express");
const mysql = require("mysql");

const app = express();

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
