var express = require('express');
var router = express.Router();
var configuration = require('../configuration.js');

const { chatkit } = configuration

router.post('/', 
    (req, res) => {
        const { username } = req.body
        console.log(username, 'users route')
        chatkit
            .createUser({
                name: username,
                id: username
            })
            .then(() => res.sendStatus(201))
            .catch(error => {
                if(error.error_type === '/services/chatkit/user_already_exists') {
                    res.sendStatus(200)
                } else {
                    console.log(error.error)
                } 
                
            })
})


module.exports = router;