const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});


var messages = [
  {"username": "Bob", "content": "Lorem Ipsum"},
  {"username": "Bob", "content": "Lorem Ipsum"},
  {"username": "Bobette", "content": "Lorem Ipsum"},
  {"username": "Bobette", "content": "Lorem Ipsum"},
  {"username": "Bob", "content": "Lorem Ipsum"}
]


app.get('/', (req, res) => {
  res.send("bah mon reuf tu t'es perdu ?");
});


io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('sync-data', messages);

  socket.on('message-sent', (message) => {
    console.log(`${message.username}: ${message.content}`)
    io.emit('broadcast-message', message)
  });
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});