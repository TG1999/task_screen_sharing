const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
var path=require('path');
var ioRedis = require('socket.io-redis');
var redis = require('redis');
var port = 6379;
var host = '127.0.0.1';
// const port=process.env.PORT||2000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/public')))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
const pub = redis.createClient(port, host);
const sub = redis.createClient(port, host, {detect_buffers: true});
const redisAdapter = ioRedis({ pubClient: pub, subClient: sub })
var io=require('socket.io')(server,{adapter:redisAdapter})

io.on('connection',(socket)=>{
    
    socket.on('stream',(data)=>{
        io.emit('stream',data);  
    })
})
server.listen(3000,()=>{
    console.log("listening at http://localhost:3000")
  })
