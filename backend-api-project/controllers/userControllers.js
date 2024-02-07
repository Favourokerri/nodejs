const User = require('../models/model');
const bcryptjs = require('bcryptjs');
httperror = require('../models/errorModels');


//================== Rgester User ========================//
//api/user/register
//unprotected

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body;
    
        if(!name || !email || !password) {
            return next(new httperror('please fill in all filed', 422))
        }

        const emailExits = await User.findOne({email: email})
        if(emailExits) {
            return next(new httperror('sorry this user alredy exits'))
        }

        if(password.trim().length < 6) {
            return next(new httperror('sorry password must be greater that 6 characters'));
        }

        if(password != password2) {
            return next(new httperror('sorry passwords do not match'))
        }

        salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = await User.create({name, email, password: hashedPassword});
        res.json(newUser);


    } catch (error) {
       return next(new httperror(`user registration failed ${error}`, 422)) 
    }
}

module.exports = { registerUser }