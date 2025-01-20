//THIS FOLDER IS FOR HANDLING DATABASE QUERIES AND API RESPONSES
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

// Run the dotenv configuration
dotenv.config();

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

// Add a new user and hash the password
const saltRounds = 10;
router.post('/users', (req, res) => {
    const {name, surname, username, email, password} = req.body;
    // Generate salt
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err){
            console.error('Error generating salt:', err);
            return res.status(500).json({error: 'Error generating salt'});
        }
        // Hash the password entered
        bcrypt.hash(password, salt, (err, hash) => {
            if (err){
                console.error('Error hashing password:', err);
                return res.status(500).json({error: 'Error hashing password'});
            }
            // Query to add user to database
            const sql = 'INSERT INTO Users (name, surname, username, email, password) VALUES (?, ?, ?, ?, ?)';
            db.query(sql, [name, surname, username, email, hash], (err, results) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ error: 'Error inserting user into the database' });
                }
                res.json({ message: 'User added successfully!', userId: results.insertId });
            });
        });
    });
});

// Log into your profile (query to check credentials)

// View your profile (query to retrieve details)

// Change your profile details (query to update information)

// Get BSL video (query to retrieve video)


module.exports = router;