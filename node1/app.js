const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  if (url === "/") {
  }
  res.setHeader("Header-Type", "text/html");
  res.write();
});

server.listen(3000);
