const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create or open SQLite database
const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error("Could not open database:", err);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Create users table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`
);

// Create loans table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS loans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT,
    email TEXT,
    mobile TEXT,
    loanAmount REAL,
    address TEXT
  )`
);

// Register user API
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.run(sql, [name, email, password], function (err) {
    if (err) {
      return res.status(500).json({ message: "Error registering user", error: err.message });
    }
    res.status(200).json({ message: "User registered successfully", id: this.lastID });
  });
});

// Login user API
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM users WHERE name = ? AND password = ?`;

  db.get(sql, [username, password], (err, row) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    if (row) {
      res.status(200).json({ message: "Login successful", user: row });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

// Apply for a loan API
app.post("/apply-loan", (req, res) => {
  const { fullName, email, mobile, loanAmount, address } = req.body;

  if (!fullName || !email || !mobile || !loanAmount || !address) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `INSERT INTO loans (fullName, email, mobile, loanAmount, address) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [fullName, email, mobile, loanAmount, address], function (err) {
    if (err) {
      return res.status(500).json({ message: "Error applying for a loan", error: err.message });
    }
    res.status(200).json({ message: "Loan application submitted successfully", id: this.lastID });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
