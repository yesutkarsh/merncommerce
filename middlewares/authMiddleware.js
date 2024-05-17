const jwt = require("jsonwebtoken")

const restrictToLoginUsers = (req,res,next)=>{
    const token = req.cookies.token;
    if (!token) return res.send("403");
    jwt.verify(token, "MyEcommAppSECRET", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user
        next();
    });
}


module.exports = {restrictToLoginUsers}