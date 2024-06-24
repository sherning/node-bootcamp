const express = require("express");

const app = express();

// middleware
app.use((req, res, next) => {});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
