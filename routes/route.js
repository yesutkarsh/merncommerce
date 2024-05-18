const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel")
const {handleSignup, handleSignIn, restrictToLoginUsers,handleuserAccoutn} = require("../controller/authController")




router.get("/", async(req, res) => {
  
    res.render("home")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.post("/signup", handleSignup)


router.get("/login", (req, res) => {
    res.render("login")
})




// Account
router.get("/account",restrictToLoginUsers, handleuserAccoutn)






router.post("/login", handleSignIn )

module.exports = router;