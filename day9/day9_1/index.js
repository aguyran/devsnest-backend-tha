const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname);
app.set(path.join(__dirname, "views"));
app.set("view engine", "jade");
app.get("/", (req, res) => {
  // res.render("index", { title: "Express" });
  res
    .status(201)
    .cookie("token", "test", {
      expire: new Date(Date.now() + 8 * 360000),
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});
app.get("/admin", (req, res) => {
  res.render("admin", { user: "xd" });
});
app.listen(8000);
