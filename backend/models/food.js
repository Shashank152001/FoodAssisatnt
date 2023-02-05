const mongoose=require("mongoose")
const foodSchema=mongoose.Schema({
    foodname:String,
    protein:Number,
    carbohydrate:Number,
    fat:Number,
    vitaminA:Number,
    vitaminB12:Number,
    vitaminC:Number,
    calcium:Number,
    iron:Number,
    fiber:Number,
    energy:Number
})

module.exports=mongoose.model('food',foodSchema)