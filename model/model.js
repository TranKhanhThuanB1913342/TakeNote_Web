const mongoose = require("mongoose");

// User
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        require: true
    },

    name:{
        type: String,
        require: true
    },

    notes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Note"
        }
    ]
})

// Note
const User = mongoose.model("User", userSchema);

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    content:{
        type: String
    },

    user: {
        type: mongoose.Schema.Types.ObjectId
    }

    // images: {
    //     type: [String] // link to image
    // }
})


const Note = mongoose.model("Note", noteSchema);

module.exports = {Note, User};