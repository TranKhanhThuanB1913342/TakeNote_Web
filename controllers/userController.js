const { response } = require("express");
const {User, Note} = require("../model/model");

const UserController = {
    // ADD User
    addUser: async(req, res) => {
        console.log("add user");
        try {
            const newUser = new User(req.body);
            const saveUser = await newUser.save();
            res.status(200).json(saveUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET ALL User
    getAllUser: async(req, res) => {
        console.log("get all user");
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET User BY ID
    getUserById: async(req, res) => {
        try {
            const users = await User.findById(req.params.id);
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //update User
    updateUser: async(req, res) =>{
        try{
            const rs = await User.updateOne({_id: req.params.id},{$set: {
                title: req.body.title,
                content: req.body.content
            }})
            res.status(200).json(rs);
        }
        catch (error){
            res.status(500).json(error);
        }
    },

    //DELETE A User
    deleteAUser: async(req, res) => {
        console.log("delete User");
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("delete successfully <3");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getUserByEmail: async (req, res) => {
        res.status(200).json("get user bt email")
        // try {
        //     const a = await User.find({email: req.body.email}, function(err,obj) { console.log(obj); });
        //     res.status(200).json(a);

        // } catch (error) {
        //     res.status(500).json(error);
        // }
    }
}

module.exports = UserController;