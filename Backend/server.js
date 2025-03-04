const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create or open SQLite database
const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Could not open database:', err);
    } else {
        console.log('Connected to SQLite database.');
    }
});

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
)`);

// Register user API
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.run(sql, [name, email, password], function (err) {
        if (err) {
            res.status(500).json({ message: 'Error registering user', error: err.message });
        } else {
            res.status(200).json({ message: 'User registered successfully', id: this.lastID });
        }
    });
});
// Login user API
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    
    db.get(sql, [email, password], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err.message });
        }
        if (row) {
            res.status(200).json({ message: 'Login successful', user: row });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
