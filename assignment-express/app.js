const express = require("express");
const app = express();

// backslash by default
app.use("/", (req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.use("/users", (req, res, next) => {
  res.send("<h1>USERS WELCOME!</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>WELCOME!</h1>");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
