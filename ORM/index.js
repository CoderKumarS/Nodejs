const express = require('express');
const sequelize = require('./sequelize');
const Todo = require('./models/Todo');
const app = express();
const port = 3000;

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

        // Synchronize defined models with the database
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('All models are synchronize successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/todos', (req, res) => {
    Todo.findAll()
        .then((todos) => {
            res.json(todos);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.post('/todos', (req, res) => {
    const { title, completed } = req.body;
    Todo.create({ title, completed })
        .then((todo) => {
            res.status(201).json(todo);
        })
        .catch((error) => {
            res.status(400).json({ error: 'Bad request' });
        });
});

app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const { title, completed } = req.body;
    Todo.findByPk(todoId)
        .then(todo => {
            if (!todo) {
                return res.status(404).json({ error: "Todo no found" });
            }
            // update the todo
            todo.title = title;
            todo.completed = completed;
            return todo.save();
        })
        .then(updateTodo => {
            res.json(updateTodo);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal Serrver error' });
        });
});
app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    Todo.findByPk(todoId)
        .then(todo => {
            if (!todo) {
                return res.status(404).json({ error: "Todo not found" });
            }
            
            return todo.destroy();
        })
        .then(()=>{
            res.status(204).end();
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal Serrver error' });
        });

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))