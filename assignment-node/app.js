const http = require("http");
const routes = require("./routes");

// Create an HTTP server using the request handler from routes.js
const server = http.createServer(routes.requestHandler);

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
