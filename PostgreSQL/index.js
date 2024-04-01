const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;          // Port number

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: 'root'
});
app.use(express.json());
app.get('/todos', (req, res) => {
    pool.query('SELECT * FROM todos', (error, result) => {
        if (error) {
            console.error("Error fetching todos", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.json(result.rows);
        }
    });
});
app.post('/todos', (req, res) => {
    const { title, completed } = req.body;
    pool.query('INSERT INTO todos (title,completed) VALUES ($1, $2)', [title, completed], (error) => {
        if (error) {
            console.error("Error creating todo", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.status(201).json({ message: 'Todo created successfully' });
        }
    });
});
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const { title, completed } = req.body;
    pool.query('UPDATE todos SET title = $1, completed = $2 WHERE id = $3', [title, completed, id], (error) => {
        if (error) {
            console.error("Error updating todo", error);
            res.status(500).json({ error: 'Internal Server error' });
        } else {
            res.status(200).json({ message: 'Todo updated successfully' });
        }
    });
});
app.listen(port,
    () => console.log(`Server is running on port ${port}`)
);