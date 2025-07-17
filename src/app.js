const express = require("express");

const app = express();

app.use('/test',(req,res)=>{
    res.send("Hello from Server")
})

app.listen(3001, ()=>{
    console.log("Server is successfully running on port 3001")
});
