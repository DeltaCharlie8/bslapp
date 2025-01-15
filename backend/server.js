const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');


// Load environment variables
//dotenv.config(); // can delete this once checked

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.get('/', (req, res) => {
//     res.send('Simple Signs Backend is running!'); CAN DELETE ONCE CHECKED
// });
//use the route.js
app.use('/', routes);

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
