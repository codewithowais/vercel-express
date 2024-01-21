const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/home", (req, res) => {
  res.send("HEllo.. this is home page");
});

app.get("/about", (req, res) => {
  res.send("HEllo.. this is home about");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;