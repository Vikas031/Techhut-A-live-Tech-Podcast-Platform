require('dotenv').config();
const express=require('express');
const app=express();
const router=require('./routes');
const DbConnect=require("./database")
const cors =require('cors');
const cookieParser=require('cookie-parser');

app.use(cookieParser());
app.use(cors({
    credentials:true, 
    origin:['http://localhost:3000']
}))
app.use('/storage',express.static('storage'));

const PORT=process.env.PORT||5500;
DbConnect();
app.use(express.json({
    limit:'8mb'
}));
app.use(router);


app.get('/',(req,res)=>{
    res.send("hello");
});



app.listen(PORT,()=>{
    console.log("Server Running");
})