const { response } = require("express");
const {Note} = require("../model/model");

const noteController = {
    // ADD note
    addNote: async(req, res) => {
        console.log("add note");
        try {
            const newNote = new Note(req.body);
            const saveNote = await newNote.save();
            res.status(200).json(saveNote);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET ALL NOTE
    getAllNote: async(req, res) => {
        console.log("get all note");
        try {
            const notes = await Note.find();
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET NOTE BY ID
    getNoteById: async(req, res) => {
        try {
            const notes = await Note.findById(req.params.id);
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json("thís is a error");
        }
    },

    //update note
    updateNote: async(req, res) =>{
        try{
            const newNote = new Note(req.body);
            const saveNote = await newNote.save();
            res.status(200).json(saveNote);
        }
        catch (error){
            res.status(500).json(error);
        }
    },

    //DELETE A NOTE
    deleteANote: async(req, res) => {
        console.log("delete note");
        try {
            await Note.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully <3");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    
}

module.exports = noteController;