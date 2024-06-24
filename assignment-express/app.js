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

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
