import express from 'express';
import { handleRender } from './helpers/renderer';
import bodyParser from 'body-parser';
import cors from 'cors';

var userRoute = require('./helpers/routes/users.js');
var authRoute = require('./helpers/routes/authenticate.js');
var deleteUserRoute = require('./helpers/routes/deleteUser.js');
var app = express();

// BODY PARSER --------------------
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//ROUTES --------------------------
app.use('/api/users', userRoute);
app.use('/api/authenticate', authRoute);
app.use('/api/delete', deleteUserRoute);

app.use(handleRender);

app.listen(3001, () => {
    console.log("You are now connected to the site.")
})