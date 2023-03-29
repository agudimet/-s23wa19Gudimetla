var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let x = req.query.x| Math.floor(Math.random() * 100) + 1;
    let abs=Math.abs(x);
    let acos=Math.acos(x);
    let sin=Math.sin(x);
    

    res.send(`Math.abs(${x})  is: ${abs} Math.acos(${x})  is: ${acos}   Math.sin(${x})  is: ${sin} `);




  
});

module.exports = router;
