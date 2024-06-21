const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes.handler);

// http://localhost:3000 to test my code
server.listen(3000);
