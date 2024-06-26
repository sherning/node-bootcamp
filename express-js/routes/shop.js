const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  // works on both unix and windows systems
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
