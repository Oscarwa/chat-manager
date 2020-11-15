const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const twitchRoutes = require('./route');

require('dotenv').config();

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const socket = require('./socket');

socket.set(io);

app.use(morgan('dev'));
app.use(cors());

app.use('/', (req, res) => {
    res.json({message: 'server running'});
});

// Routes
app.use('/', twitchRoutes);

// Error handling
app.use((req, res, next) => {
    res.status(404);
    const error = new Error(`NotFound - ${req.originalUrl}`);
    next(error);
});

app.use((err, req, res, next,) => {
    res.status(res.status || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
});

server.listen(process.env.PORT, () => {
    console.error('Server running!!');
    console.log(`App running on port: ${process.env.PORT}`);
})