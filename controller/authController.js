const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");
const { use } = require("../routes/route");

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
            res.redirect("/")
        }else{
            // Passwords do not match
            res.send("Invalid credentials");
        }
       } catch (error) {
            res.send("Error")
       }
}




const restrictToLoginUsers = async (req, res, next) => {
    try {
        const userToken = req.cookies.token;
        if (!userToken) {
            return res.render("signup");
        }

        jwt.verify(userToken, "MyEcommAppSECRET", async (err, decodedToken) => {
            if (err) {
                return res.render("signup");
            }

            const userEmail = decodedToken.email;
            const userExist = await userModel.findOne({ email: userEmail });

            if (!userExist) {
                return res.render("signup");
            }

            next();
        });
    } catch (error) {
        console.error("Error:", error);
        res.render("signup");
    }
};



const handleuserAccoutn = async(req,res)=>{
    const userToken = await req.cookies.token;

    jwt.verify(userToken, "MyEcommAppSECRET", async (err, decodedToken) => {
        const useremail = await decodedToken.email;

        const user = await userModel.findOne({"email":useremail})
        const data = {
            firstName: user.firstName,
            lastName:user.lastName,

        }

        res.render("./account/account",data)
    })
    

    





}



module.exports = {handleSignup, handleSignIn,restrictToLoginUsers,handleuserAccoutn}