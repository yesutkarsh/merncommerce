const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
})

const userModel =  mongoose.model("ecomm-app",userSchema)
module.exports = userModel