require('dotenv').config();
const route = require("./routes/route")
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {handleSignup, handleSignIn} = require("./controller/authController") 
const {restrictToLoginUsers} = require("./middlewares/authMiddleware")
const userModel = require("./models/userModel")

app.use(express.json());
app.set('view engine', "ejs")
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))


// Serve static files from the 'public' directory
app.use(express.static('public'));


// const localMongoUrl = process.env.mongo_url;

// const mongourl = "mongodb+srv://shavitriverma111:6qAn8ZfzQFIA7Zov@cluster0.b96tkzj.mongodb.net/mylinks?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(process.env.mongo_url, console.log("DB CONNECTED"))


// app.get("/login", (req, res) => {
//     res.render("login")
// })





// app.post("/create",handleSignup)

// app.post("/login",handleSignIn)


app.use("/",route);



// app.get("/home",(req,res)=>{
//     res.send("Home")
// })
app.listen(3000)