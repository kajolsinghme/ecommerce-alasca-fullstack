const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

//Register
exports.register = async(req, res) => {
    const {username, email, password } = req.body; 
    try {
        let existingUser = await User.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ "error": 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({username, email, password:hashedPassword});

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
};

//Login
exports.login = async(req, res) => {

    const {username, password: inputPassword } = req.body;

    try{
        const user = await User.findOne({username: username});

        if(!user){
            res.status(404).json("User not found")
        };

        const passwordMatch = await bcrypt.compare(inputPassword, user.password);

        if(!passwordMatch){
            res.status(401).json("Wrong Password");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
                {expiresIn:"3d"}
        );

        const { password, ...others } = user._doc;   
        res.status(200).json({...others, accessToken});
    }
    catch(error) {
        res.status(500).json({ 'error': error.message });
    }
}

    