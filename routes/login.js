const express = require('express');
const fs = require('fs');
const localStorage = require("localStorage");
const router = express.Router();

router.get('/login',(req,res,next) => {
    res.send('<form action="/chat" method="POST"><input type="text" name="username"><button type="submit">Login</button></form>')
   
});

router.post('/chat',(req,res,next) => {
 
   fs.writeFile('username.txt',Object.values(req.body).toString(),(err) => {
        res.status(302)
        
        return res.end();
   })
    res.redirect('/')
})
localStorage.setItem("hi","hi")
module.exports = router;

