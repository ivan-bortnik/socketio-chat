const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "netlify.app",
    methods: ["GET", "POST"]
  }
});


var messages = []


app.get('/', (req, res) => {
  res.send("bah mon reuf tu t'es perdu ?");
});


io.on('connection', (saocket) => {
  console.log('a user connected');
  socket.emit('sync-data', messages);

  socket.on('message-sent', (message) => {
    console.log(`${message.username}: ${message.content}`);
    messages.push(message);
    io.emit('broadcast-message', message);
  });
});


server.listen(443, () => {
  console.log('listening on *:443');
});