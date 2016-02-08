var app = require('express');
var router = app.Router();

router.get('/', function (req, res) {
    console.log('they are at the main page');
});

module.exports = router;