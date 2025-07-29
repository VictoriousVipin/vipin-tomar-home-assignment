const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Load config from env
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Customers Api
app.get("/customers", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM customer");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Service listening on port ${port}`);
});
