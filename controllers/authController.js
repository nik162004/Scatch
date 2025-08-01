const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken')

module.exports.registerUser = async function(req, res){
    try {
        let {email, password, fullname} = req.body;

        let user = await userModel.findOne({email: email});
        if(user) return res.status(401).send('User already exists');

        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt, async (err, hash)=>{
                if(err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname,
                    });

                    let token = generateToken(user);
                    res.cookie("token", token);
                    return res.status(201).json({message: "User registered", user});
                };
            })
        })

    } catch (error) {
        res.send(error.message);
    }
}

module.exports.loginUser = async (req, res) =>{
    let {email, password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.send("Email or Password is incorrect");

    bcrypt.compare(password, user.password, (err, result)=>{
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/shop");
        } else {
            res.send("Email or Password is incorrect");
        }
    })
}

module.exports.logout = async (req, res) =>{
    res.cookie("token", "");
    res.redirect("/");
}