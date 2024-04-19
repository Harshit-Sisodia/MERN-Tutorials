const express = require('express');

const app = express()
app.listen(1400)

app.get('/home',(req,res)=>{
    res.send("<h1>Welcome GET</h1>");
})

app.post('/products',(req,res)=>{
    res.send("<h1>Welcome post</h1>");
})
app.patch('/products',(req,res)=>{
    res.send("<h1>Welcome patch</h1>");

app.deleted('/products',)
})

