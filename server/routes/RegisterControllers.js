const express = require('express');
const routes = express.Router();
const register = require('../model/Register');
const bcrypt = require('bcrypt');
const {createToken,validateToken} = require('../jwt/jwt')



routes.post('/profile',validateToken , (req,res) => {
    res.json('/profile')
})


routes.post('/', async (req,res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const Register = new register({
        name :req.body.name,
        password:hash
    })
    try{
        const regis= await Register.save()
        res.json(regis);
    }catch(error){
        res.json({error}).send('data gagal dibuat/tidak valid')
    }
})

routes.post('/login',async(req,res) => {
    const {name,password} = req.body;
    const existing = await register.findOne({name});
    if(!existing){
        return res.status(404).json({message:'user doenst exist'})
    }

   try{
    
    //setelah register berhasil kita kasih tokennya kode rahasianya
    const accesToken = createToken(register);
    res.cookie('perizinan', accesToken, {
        //atur masa aktif token nyac1 hari
        maxAge:60*60*24*30*1000,
        httpOnly:true
    })
    res.json({message: 'login succes'}).send(200);
   }catch(err){
    res.json({error:err});
   }

   if(!existing){
    res.json({message :"user not found"})
   }
   const isPasswordCorrect = bcrypt.compareSync(password,register.password);

   if(!isPasswordCorrect){
    return res.status(400)
    .send('maaf kata sandi nya salah||harap isi kembali yaa')
    .json({message:"kata sandi salah"})
   }

   return res.status(200)
   .send('anda berhasil login ').json({message:"login succes"});

})

module.exports = routes;