const socketIO = require('socket.io'); 
const http = require('http'); 
const path = require('path'); 
const express = require('express'); 

const publicPath = path.join(__dirname, '../public'); 
const port = process.env.PORT || 3000; 

const app = express(); 

const server = http.createServer(app); 
const io = socketIO(server); 

app.use(express.static(publicPath)); 

io.on('connection', (socket)=>{
    console.log('New user connected'); 
    socket.on('disconnect', ()=>{
        console.log('User was disconnected'); 
    }); 
}); 




server.listen(port, ()=>{
    console.log(`Server started at port ${port}`); 
}); 