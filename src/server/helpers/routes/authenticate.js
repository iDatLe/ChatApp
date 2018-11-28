var express = require('express');
var router = express.Router();
var configuration = require('../configuration.js');

const { chatkit } = configuration

router.post('/', 
    (req, res) => {
        console.log("You've reached the authentication api.")
        const authData = (chatkit.authenticate({
            grant_type: 'client_credentials',
            userId: req.query.user_id
        }))

        res.status(authData.status)
            .send(authData.body);
    }
)

module.exports = router;