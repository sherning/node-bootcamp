const fs = require("fs");
const path = require("path");

const users = []; // Array to hold user names

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    // Serve the form HTML
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dirname, "form.html")).pipe(res);
  } else if (url === "/users") {
    // Serve the user table HTML
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(
      path.join(__dirname, "user-table.html"),
      "utf8",
      (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("Internal Server Error");
          return res.end();
        }

        // Inject the user list into the HTML
        const userListHtml = users.map((user) => `<li>${user}</li>`).join("");
        const htmlWithUsers = data.replace(
          "<!-- User list items will be injected here -->",
          userListHtml
        );

        res.write(htmlWithUsers);
        res.end();
      }
    );
  } else if (url === "/create-user" && method === "POST") {
    const body = [];
    console.log("new user added");
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      users.push(username); // Add the new user to the array
      res.writeHead(302, { Location: "/users" });
      res.end();
    });
  } else if (url === "/styles.css") {
    // Serve the CSS file
    res.writeHead(200, { "Content-Type": "text/css" });
    fs.createReadStream(path.join(__dirname, "styles.css")).pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page Not Found");
    res.end();
  }
};

module.exports = {
  requestHandler,
};
