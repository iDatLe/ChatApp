var express = require('express');
var router = express.Router();
var configuration = require('../configuration.js');

const { chatkit } = configuration

router.post('/', 
    (req, res) => {
        const { user } = req.body
        chatkit
            .deleteUser({userId: user})
            .then(() => res.sendStatus(201))
            .catch((err) => {console.log(err)})
 
})


module.exports = router;