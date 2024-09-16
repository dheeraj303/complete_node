const express = require('express');

require('dotenv').config();
// console.log(process.env);
const db = require('./config/db');
const app = express();
var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser())


const router = require('./routes/auth');
app.use(router);


const dashboardrouter = require('./routes/dashboard');
app.use(dashboardrouter);


app.listen(3000);


// Environment Variable
// JWT Token Oauth2