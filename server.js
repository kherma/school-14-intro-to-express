const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.show = (fileName) => {
    res.sendFile(path.join(__dirname, `/views/${fileName}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, "/public")));

app.use("/user/", (req, res, next) => {
  res.show("login.html");
});

app.get(["/", "/home"], (req, res) => {
  res.show("index.html");
});

app.get("/about", (req, res) => {
  res.show("about.html");
});

app.use((req, res) => {
  res.status(404).show("404.html");
});

app.listen(8000, () => {
  console.log("Server on port 8000");
});
