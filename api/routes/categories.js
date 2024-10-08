var express = require('express');
var router = express.Router();

const isAuthenticated = true;

router.all("*", (req, res, next) => {
    if(isAuthenticated) {
        next();
    }
    else {
        res.json({succes: false, error: "Not Auth"})
    }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({succes: true});
});

module.exports = router;