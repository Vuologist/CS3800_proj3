const express = require("express");
const router = express.Router();

//get hex conversion
router.get("/", function(req, res) {
  console.log(req.query.input);

  let input = req.query.input.toString();
  let output = Buffer.from(input, "utf8").toString('hex');

  console.log(output);

  res.send({
    type: "GET",
    name: output
  });
});

router.post("/", function(req, res) {
  console.log(req.body);

  let input = req.body.input.toString();
  let output = Buffer.from(input, "utf8").toString('hex');

  console.log(output);

  res.send({
    type: "POST",
    name: output
  });
});


module.exports = router;
