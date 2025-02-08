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

// Log into your profile
router.post('/login', (req, res) => {
    const {username, password} = req.body;
    // Query to find the username in the database
    const sql = 'SELECT password FROM users WHERE username = ?'
    db.query(sql, [username], (err, results) => {
        if (err) {
            console.error('Query error', err);
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        // Check if username exists
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' })
        }   
        // if user exists, check if hashed passwords match
        const savedPassword = results[0].password;
        bcrypt.compare(password, savedPassword, (err, isMatch) => {
            if (err) {
                console.error('Password error: ', err);
                return res.status(500).json({ error: 'Password comparison error' });
            }
            if (isMatch) {
                res.json({ error: 'User logged in!'});
            }else {
                return res.status(401).json({ error: 'Invalid username or password, please try again' });
            }
        });
    });
});

// View your profile (query to retrieve details)
//router.post('', (req, res) => {});

// Change your profile details (query to update information)
//router.post('', (req, res) => {});

// Get BSL video
// router.get('/videos', (req, res) => {
//     console.log('connected to router');
//     const { title } = req.query;
//     // if URL exists, save URL
//     const savedURL = results[0].password;
//     // Query to get URL from database
//     //const sql = 'SELECT VideoURL FROM BSL_Library WHERE Title = ?';
//     const sql = `SELECT VideoURL FROM BSL_Library WHERE Title = ${title}`;
//     db.query(sql, [title], (err, results) => {
//         if (err) {
//             console.error('Database query error:', err);
//             res.status(500).json({ message: 'Database query error' });
//         } else if (results.length > 0) {
//             res.json({ VideoURL: results[0].VideoURL }); // Return the first matching result
//         } else {
//             console.log('No video found for title:', title); // Log when no result is found
//             res.status(404).json({ message: 'Video not found' });
//         }
//     });
// });

router.get('/videos/:letter', async (req, res) => {
    const letter = req.params.letter;
    try {
        const [rows] = await db.promise().query("SELECT VideoURL FROM BSL_Library WHERE Title = ?", [letter]);
        if (rows.length > 0) {
            res.json({ VideoURL: rows[0].VideoURL });
        } else {
            res.status(404).json({ error: "No video found" + letter });
        }
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;