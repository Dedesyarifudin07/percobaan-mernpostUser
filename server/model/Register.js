const mongoose = require('mongoose');

const register = mongoose.model('Register', 
    {
        name: {
            type:String,
            required:true
        },
        password : {
            type:String,
            required: true,
            unique: true
        }
    }
)

module.exports = register;