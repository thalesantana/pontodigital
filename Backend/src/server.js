const express =  require('express');
const path = require('path');
const cors = require('cors');


const app =  express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

require('./Database');

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(express.json());

app.use(require('./routes'));

server.listen(3333); 