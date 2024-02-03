const User = require("../models/User");
const bcrypt = require('bcrypt')

exports.updateUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
};
   
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ "message": "User not found" });
        }

        res.status(200).json({
            "message": "User has been deleted successfully",
            "user": deletedUser
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ "message": "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};