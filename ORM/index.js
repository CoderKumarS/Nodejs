const express = require('express')
const sequelize = require('./sequelize');
const Todo = require('./models/Todo')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))