var express = require('express');
var router = express.Router();
var configuration = require('../configuration.js');

const { chatkit } = configuration

router.post('/', 
    (req, res) => {
        const authData = (chatkit.authenticate({ //chatkit's authentication method
            grant_type: 'client_credentials',
            userId: req.query.user_id //this is grabbed from the client
        }))

        res.status(authData.status)
            .send(authData.body); //we're sending data back to the server
    }
)

module.exports = router;