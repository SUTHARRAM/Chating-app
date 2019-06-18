var socket = io(); 

socket.on('connect',  function(){
    console.log('Connected to server'); 
 

    socket.emit('createMessage', {
        from: "vikas",
        text: 'Hey whatshapp bro what are you doing now it.'
    }); 

    socket.on('newMessage', function(message){
        console.log('Reply: ', message); 
    }); 

}); 

socket.on('disconnect', function(){
    console.log('Disconnected from sever'); 
}); 
 