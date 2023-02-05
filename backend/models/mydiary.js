const mongoose=require("mongoose")

const mydiarySchema=mongoose.Schema({
    username:String,
    foodname:String,
    searchDate:Date
})

module.exports=mongoose.model('mydiary',mydiarySchema)