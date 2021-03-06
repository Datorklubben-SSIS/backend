const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const init = async () => {
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.listen(process.env.PORT, () =>
    console.log(`Server started on port ${process.env.PORT}`)
  );
};

init();
