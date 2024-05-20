const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel")
const {handleSignup, handleSignIn, restrictToLoginUsers,handleuserAccoutn} = require("../controller/authController")




router.get("/", async(req, res) => {
    res.render("home")
})





// Auth Routes
router.get("/signup", (req, res) => {
    res.render("signup")
})
router.post("/signup", handleSignup)
router.get("/login", (req, res) => {
    res.render("login")
})




// Men
router.get("/men",(req,res)=>{
    res.render("men/menCollec")
})

router.post("/login", handleSignIn )


// Account  only authenticated users allowed to view
router.get("/account",restrictToLoginUsers, handleuserAccoutn)







module.exports = router;