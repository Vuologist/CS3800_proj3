const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("connected on port 3000");
});
