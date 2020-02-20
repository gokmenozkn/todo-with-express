const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Controller 
const control = require('./controller/todoControl');

// Mongo
const mongoLib = require('./lib/mongo');
mongoLib(mongoose);

// EJS Template
app.set('view engine', 'ejs');
app.set('views', 'views');

// Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static
app.use(express.static('public'));

// Routes
app.get('/', control.get);

app.post('/', control.post);

app.patch('/', (req, res, next) => {});

app.get('/:id', control.delete);

// Server
const server = require('./lib/server');
server(app);