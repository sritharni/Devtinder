const express = require("express");

const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth");

app.use('/admin', adminAuth)

app.get('/admin/getData', (req,res)=>{
    res.send("Get all Data")
})
app.get('/admin/deletedUser', (req,res)=>{
    res.send("Deleted User")
})

app.use('/user', userAuth,(req,res)=>{
    res.send("Hello from Server")
})
app.use('/hello',(req,res)=>{
    res.send("Hello Hello Hello")
})
app.listen(3000, ()=>{
    console.log("Server is successfully running on port 3000")
});
