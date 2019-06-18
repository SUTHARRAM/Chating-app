const socketIO = require('socket.io'); 
const http = require('http'); 
const path = require('path'); 
const express = require('express'); 
const {generateMessage} = require('./utils/message'); 

const publicPath = path.join(__dirname, '../public'); 
const port = process.env.PORT || 3000; 

const app = express(); 

const server = http.createServer(app); 
const io = socketIO(server); 

app.use(express.static(publicPath)); 

io.on('connection', function(socket){
    console.log('New user connected'); 

    socket.emit('newMessage', generateMessage('Admin', "welcome to chat room!")); 

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined!')); 

    socket.on('createMessage', (message)=>{
        console.log('message: ', message); 
        io.emit('newMessage', generateMessage(message.from, message.text)); 
    }); 

    socket.on('disconnect', function(){
        console.log('User was disconnected'); 
    }); 
}); 




server.listen(port, ()=>{
    console.log(`Server started at port ${port}`); 
}); 