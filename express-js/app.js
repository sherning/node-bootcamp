const express = require("express");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const path = require("path");
const rootDir = require("./utils/path.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

// catch 404
app.use("/", (req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
