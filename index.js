const compliment = require("./complimentr");
const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

app.get("/public/randomcompliment/compliment/random", (req, res) =>
  res.send(compliment())
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
