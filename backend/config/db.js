const mongoose = require('mongoose');
const DB = `mongodb+srv://shashank086:SkAL4YLFNc8t9i2x@cluster0.wyfjbep.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(DB)
        console.log("Connection to MongoDB database successful")
    } catch (error) {
        console.log("Connection to MongoDB database failed")
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB