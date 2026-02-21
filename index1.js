import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server Started")
})

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/home",(req,res)=>{
    res.send("Welcome to Home Page")
})
app.get("/users",(req,res)=>{
    res.send("This is users list")
})