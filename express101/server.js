import http from "http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>Hello world!, this is the home page</h1>");
    const homePageHTML = fs.readFileSync("express101/node.html");
    res.write(homePageHTML);
    res.end();
  } else if (req.url === "/node.png") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>Hello world!, this is the home page</h1>");
    const homePageHTML = fs.readFileSync("express101/node.png");
    res.write(homePageHTML);
    res.end();
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    // res.write("<h1>Hello world!, this is the home page</h1>");
    const css = fs.readFileSync("express101/style.css");
    res.write(css);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page NOT FOUND, 404</h1>");
    res.end();
  }
  // console.log(req)
});

server.listen(3000);
