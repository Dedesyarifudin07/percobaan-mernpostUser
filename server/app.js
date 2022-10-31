const express = require('express');
const app = express();
const RegisterController = require('./routes/RegisterControllers')
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser({extended:true}));
app.use('/register',RegisterController);


//import databases
require('./utils/db');

app.listen(port,() => {
    console.log(`port ini berjalana pada || http://localhost:${port}`)
})