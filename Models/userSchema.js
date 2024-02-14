const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
        // required:true
    },
    link:{
        type:String,
        // required:true
    },
    profile:{
        type:String,
        // required:true
    }
})

const users=mongoose.model("users",userSchema)
module.exports.users = users