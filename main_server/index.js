const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(3000, () => {
  console.log("connected on port 3000\n");
  console.log("Go to \"http://localhost:3000\" on Chrome to access index page");
});
