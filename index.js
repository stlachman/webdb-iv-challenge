const express = require("express");

const server = express();
server.use(express.json());

const dishesRouter = require("./dishes/dishes-router.js");

server.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

server.use("/api/dishes", dishesRouter);

const port = 5000;

server.listen(port, () => console.log(`Server listening on ${port}`));
