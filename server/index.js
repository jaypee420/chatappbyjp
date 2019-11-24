const express=require('express');
const http=require('http');
const socketio =require('socket.io');

const PORT=process.env.PORT || 5000;

const router=require('./router');

const app = express();
const server=http.createServer(app);
const io=socketio(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });


io.on('connection',(socket)=>{
  console.log("a user connected");
    socket.on('disconnect', ()=>{
    console.log('user disconnected');
  });
});

app.use(router);

server.listen(PORT,()=>console.log(`server has started at ${PORT}`));


 