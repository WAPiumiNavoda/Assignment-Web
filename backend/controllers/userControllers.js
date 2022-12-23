const User = require('../models/useModels');
const asyncHandler = require('express-async-handler');
const genarateToken = require('../utils/genarateToken');

const registerUser = asyncHandler(async (req,res) =>{
    const {name,email,password,pic} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error('User Already Exixts');
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            pic:user.pic,
            token: genarateToken(user._id),
        })
    } else{
        res.status(400)
        throw new Error('Error Occured! ')
    }
});


//login
const authUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin: user.isAdmin,
            pic:user.pic,
            token: genarateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalied Email or Password! ')
    }
});


module.exports ={registerUser, authUser};