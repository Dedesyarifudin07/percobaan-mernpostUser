const {sign,verify} = require('jsonwebtoken');

const createToken = (regis) => {
    const accesToken = sign(
        {name:register.name , _id:register._id}, 
        process.env.ACCES_TOKEN);
    return accesToken;
}

const validateToken = (req,res,next) => {
    const accesToken = req.cookies['perizinan'];

    if(!accesToken){
        return res.status(400).json({error: 'user not authenticated'})
    }
    try {
        const validToken = verify(accesToken, process.env.ACCES_TOKEN)
        if(validToken){
            req.authentikasi = true;
            return next();
        }
    } catch (error) {
        return res.status(400).json({error})
    }
}



module.exports = {createToken, validateToken};