const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const socketio=require('socket.io');
const io=socketio(server);
const port=process.env.PORT||2000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.post('/abc',(req,res)=>{
console.log(req.body.stream);
res.send(stream);
})
io.on('connection',(socket)=>{
    console.log(socket.id);
    console.log('connected');
    socket.on('stream',(data)=>{
        for( var vi in data.stream)
        {
            console.log(vi);
        }
    })
})
server.listen(port,()=>{
    console.log("listening at http://localhost:2000")
  })