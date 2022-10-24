const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    content:{
        type: String
    },

    // images: {
    //     type: [String] // link to image
    // }
})

const Note = mongoose.model("Note", noteSchema);

module.exports = {Note};