const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel")

const handleSignup = async(req,res)=>{
    const {email} = req.body;
    const checkIfUserExist = await userModel.findOne({email})
    if(checkIfUserExist) {res.send("User Already Exist")}
    else{
        try {
            let {firstName,lastName,password, email } = await req.body
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(password, salt)
            await userModel.create({firstName,lastName,password:hash,email})
            res.redirect("/login")
            
            
        } catch (error) {
            console.error(error);
            res.status(500).send("Error creating user");
        }
    }
}

const handleSignIn = async(req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})
        if(!user){
            return res.send("Something Went Wrong")
        }
        const match = await bcrypt.compare(password, user.password)
        if(match===true){
            const token = jwt.sign({"email":user.email}, "MyEcommAppSECRET")
            res.cookie("token",token,{httpOnly:true})
            res.send("Matched")
        }else{
            // Passwords do not match
            res.send("Invalid credentials");
        }
       } catch (error) {
            res.send("Error")
       }
}

module.exports = {handleSignup, handleSignIn}