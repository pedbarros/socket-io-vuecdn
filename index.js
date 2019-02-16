let app = require('express')()
let server = require('http').Server(app)
let io = require('socket.io')(server)

server.listen(4000)


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
     socket.on('chat.message', function(message){ 
        io.emit('chat.message', message)
    })
})