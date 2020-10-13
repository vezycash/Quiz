// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("quizData.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.id = Object.keys(quiz).sort().reverse()[0];
  }
  // Continue to JSON Server router
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
