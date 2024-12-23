const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('users',userSchema)