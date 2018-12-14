const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");

const app = express();

app.use(bodyParser.json());

app.use("/api/encryption", routes);

app.listen(4000, () => {
  console.log("connected on port 4000");
});
