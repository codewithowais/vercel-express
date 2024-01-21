const express = require("express");
const app = express();
const mongoose = require("mongoose");

const DbURL =
  "mongodb+srv://test:test123@cluster0.kegwifd.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DbURL)
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/home", (req, res) => {
  res.send("HEllo.. this is home page");
});

app.get("/about", (req, res) => {
  res.send("HEllo.. this is home about");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log("users"), res.send("Something went wrong..");
  }
});

app.post("/users", async (req, res) => {
  try {
    const userr = await User.create(req.body);
    res.json(userr);
  } catch (error) {
    console.log("users"), res.send("Something went wrong..");
  }
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body);
    res.json(user);
  } catch (error) {
    console.log("users");
    res.send("Something went wrong..");
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.send("User Deleted successfully");
  } catch (error) {
    console.log("users"), res.send("Something went wrong..");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
