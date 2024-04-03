const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3001;          // Port number

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sign',
    password: 'root',
    port: 5432
});
app.use(express.json());
app.get('/sign', (req, res) => {
    pool.query('SELECT * FROM sign', (error, result) => {
        if (error) {
            console.error("Error fetching todos", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.json(result.rows);
        }
    });
});
app.get('/sign/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM sign WHERE id = $1', [id], (error, result) => {
        if (error) {
            console.error("Error fetching todos", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.json(result.rows);
        }
    });
});
app.post('/sign', (req, res) => {
    const { username, email, password } = req.body;
    pool.query('INSERT INTO sign (username,email,password) VALUES ($1, $2, $3)', [username, email, password], (error) => {
        if (error) {
            console.error("Error creating todo", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.status(201).json({ message: 'User added successfully' });
        }
    });
});
app.put('/sign/:id', (req, res) => {
    const id = req.params.id;
    const { password } = req.body;
    pool.query('UPDATE sign SET password = $1 WHERE id = $2', [password, id], (error) => {
        if (error) {
            console.error("Error updating user", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.status(200).json({ message: 'User updated successfully' });
        }
    });
});
app.delete('/sign/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM sign WHERE id = $1', [id], (error) => {
        if (error) {
            console.error("Error deleting user", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    });
});
app.listen(port,
    () => console.log(`Server is running on port ${port}`)
);