const express = require("express");
const request = require("request")
const router = express.Router();

//GET hex conversion
router.get("/encode", function(req, res) {
  console.log(req.query.input);
  
  let holder;
  let output;

  request.get({ url: "http://localhost:4000/api/encryption/encode?input=" + req.query.input + "&flag=" + req.query.flag}, function ( error, response, body) {
    console.log("this is response: " + (body));
    holder = JSON.parse(body)
    console.log(holder.result)
    
    output=holder.result;

    res.send({
      type: "GET",
      result: output
    });
  });

});


module.exports = router;
