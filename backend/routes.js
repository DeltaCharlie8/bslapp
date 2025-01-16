//This folder is for handling database queries and API responses.
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const dotenv = require('dotenv');

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to the database
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

// Add a new user
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

// Log into your profile

// View your profile

// Change your profile details

// Get BSL video


module.exports = router;