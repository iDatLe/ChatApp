var express = require('express');
var router = express.Router();
var configuration = require('../configuration.js');

const { chatkit } = configuration

router.post('/', 
    (req, res) => {
        const { username } = req.body
        chatkit
            .createUser({
                name: username,
                id: username
            })
            .then(() => res.sendStatus(201))
            .catch(error => {
                if(error.error === 'services/chatkit/user_already_exists') {
                    res.sendStatus(201) //Even if user exists, log them in
                } else {
                    console.log('ERROR', error)
                } 
                
            })
})


module.exports = router;