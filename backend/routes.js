const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'appuser',
    password: 'app2027',
    database: 'simplesigns',
});

// Middleware to ensure database connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL.');
});

// Default route
router.get('/', (req, res) => {
    res.send('Simple Signs Backend is running!');
});

// Insert new user
router.post('/users', (req, res) => {
    const { name, surname, username, email, password } = req.body;
    const sql = 'INSERT INTO Users (name, surname, username, email, password) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, surname, username, email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User added successfully!', userId: results.insertId });
    });
});

// Fetch all BSL library items
router.get('/bsl_library', (req, res) => {
    const sql = 'SELECT * FROM BSL_Library';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

module.exports = router;