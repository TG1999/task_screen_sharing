const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const socketio=require('socket.io');
const io=socketio(server);
var path=require('path');
const port=process.env.PORT||2000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/public')))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
io.on('connection',(socket)=>{
    
    socket.on('stream',(data)=>{
        io.emit('stream',data);  
    })
})
server.listen(port,()=>{
    console.log("listening at http://localhost:2000")
  })