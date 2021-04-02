const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
//const mongoose = require('mongoose');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const configureMongoose = require('./app/config/mongoose');
const db = configureMongoose();

//const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
//const connection = mongoose.connection;
//connection.once('open', () => {
//    console.log("Mongo database connection established successfully")
//});

const studentsRouter = require('./app/routes/students');
const coursesRouter = require('./app/routes/courses');

app.use('/students', studentsRouter);
app.use('/courses', coursesRouter);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});