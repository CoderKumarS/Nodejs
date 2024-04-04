const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const app = express();

const server = app.listen(3000, () => {
    console.log("Server started");
});
const io = socketIO(server);
app.use(express.static(path.join(__dirname, '/public')))
io.on('connection', (socket) => {
    console.log('user has connected to server');
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    })
})