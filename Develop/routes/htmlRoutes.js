var path = require('path');
var router = require('express').Router();

// Get notes and send data to notes.html file
router.get('/notes', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// All other routes ('*') should also get data and send to index.html file
router.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;