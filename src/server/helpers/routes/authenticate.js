var express = require('express');
var router = express.Router();
var configuration = require('../configuration.js');

const { chatkit } = configuration

router.post('/', 
    (req, res) => {
        const { grant_type } = req.body
        const authData = res.json(chatkit.authenticate({
            grant_type: grant_type,
            userId: req.query.user_id
        }))
        res.status(authData.status)
            .send(authData.Body);
    }
)

module.exports = router;