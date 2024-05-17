const express = require("express");
const router = express.Router();
const {handleSignup, handleSignIn} = require("../controller/authController")




router.get("/", (req, res) => {
    res.render("home")
})

router.get("/signup", (req, res) => {
    res.render("signup")
})

router.post("/signup", handleSignup)


router.get("/login", (req, res) => {
    res.render("login")
})
router.post("/login", handleSignIn )

module.exports = router;