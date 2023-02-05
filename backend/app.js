const mongoose=require('mongoose')
const express=require('express')
const app=express()
const connectDb = require('./config/db')
connectDb()
app.use(express.json())
const apiRouter=require('./router/api')
// mongoose.connect('mongodb://127.0.0.1:27017/foodassistant',()=>{
//     console.log('Connect to database')
// })




app.use('/api',apiRouter)
app.listen(5000,()=>{
    console.log('Server Running on port 5000')
})