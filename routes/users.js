var express = require('express');
var router = express.Router();

var comments = []

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(comments);
});

router.post('/', function(req, res, next) {
  comments.push({'comment': req.body.comment})
  res.json(comments)
  console.log(comments)
});

module.exports = router;
