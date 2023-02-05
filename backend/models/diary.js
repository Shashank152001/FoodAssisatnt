const mongoose=require("mongoose")
const diarySchema=mongoose.Schema({
    username:String,
    foodname:String,
    searchDate:Date
})

module.exports=mongoose.model('diary',diarySchema)