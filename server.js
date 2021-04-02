const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require("passport");
const config = require('./app/config/config');
//const mongoose = require('mongoose');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config();
require("../VladislavOstrikov_comp308_Lab03/app/config/passport")(passport);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
}));
app.use(express.json());

const configureMongoose = require('./app/config/mongoose');
const db = configureMongoose();

//const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
//const connection = mongoose.connection;
//connection.once('open', () => {
//    console.log("Mongo database connection established successfully")
//});

app.use(session({
    saveUninitialized:true,
    resave: true,
    secret: config.sessionSecret
}));

app.use(passport.initialize());
app.use(passport.session());

const studentsRouter = require('./app/routes/students');
const coursesRouter = require('./app/routes/courses');

app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});