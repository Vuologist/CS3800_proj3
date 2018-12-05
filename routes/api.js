const express = require("express");
const router = express.Router();

//GET hex conversion
router.get("/encode", function(req, res) {
  console.log(req.query.input);

  let output;

  if (req.query.flag === "encode") {
    let input = req.query.input.toString();
    output = Buffer.from(input, "utf8").toString("hex");
  } else if (req.query.flag === "decode") {
    let input = req.query.input.toString();
    output = Buffer.from(input, "hex").toString("utf8");
  }

  console.log(output);

  res.send({
    type: "GET",
    result: output
  });
});

router.post("/encode", function(req, res) {
  console.log(req.body);

  let input = req.body.input.toString();
  let output = Buffer.from(input, "utf8").toString("hex");

  console.log(output);

  res.send({
    type: "POST",
    result: output
  });
});

module.exports = router;
