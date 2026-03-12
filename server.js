const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();

// Create a server
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the Accessible Streaming Platform!');
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('New client connected');

    // Your socket events go here

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});