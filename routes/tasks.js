var express = require('express');
var router = express.Router();

router.get('/tasks', function (req, res, next) {
  res.send('This is tasks API,, you mush know!!');
});

module.exports = router;
