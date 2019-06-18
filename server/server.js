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

io.on('connection', function(socket){
    console.log('New user connected'); 

    // socket.emit('newEmail', {
    //     from: 'rlc@gmail.com',
    //     text: 'Hey whatshapp',
    //     createAt: 123
    // }); 

    // socket.on('createEmail', (newEmail)=>{
    //     console.log('createEmail', newEmail); 
    // }); 

    socket.on('createMessage', (message)=>{
        console.log('message: ', message); 
    }); 

    socket.emit('newMessage', {
        from: 'John', 
        text: 'I am good how are you bro !.',
        createdAt: 12345
    }); 

    socket.on('disconnect', function(){
        console.log('User was disconnected'); 
    }); 
}); 




server.listen(port, ()=>{
    console.log(`Server started at port ${port}`); 
}); 