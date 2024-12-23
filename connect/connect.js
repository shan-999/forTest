const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://drinkity:drinkity123@drinkity.p5thc.mongodb.net/samp')
        console.log(`mongodb conneted success:${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB