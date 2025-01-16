const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//use the route.js
app.use('/', routes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
