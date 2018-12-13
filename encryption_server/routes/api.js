var caesar = require('caesar-cipher-al');
const express = require("express");
const router = express.Router();

//GET hex conversion
router.get("/encode", function(req, res) {
  console.log(req.query.input);

  let holder;
  let output;

  if (req.query.flag === "encode") {
    let input = req.query.input.toString();
    holder = caesar.encrypt(input, 6);
    output = Buffer.from(holder, "utf8").toString("hex");
    console.log(holder);
     
  } else if (req.query.flag === "decode") {
    let input = req.query.input.toString();
    holder = Buffer.from(input, "hex").toString("utf8");
    output = caesar.decrypt(holder, 6);
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
