const express = require('express');
const fs = require('fs');
const store = require('store')
const router = express.Router();

router.get('/login',(req,res,next) => {
    res.send(`<form action="/login" onsubmit="localStorage.setItem('username',document.getElementById('username').value);" method="POST"><input id="username" type="text" name="username"><button type="submit">Login</button></form>`)
   
});

router.post('/login',(req,res,next) => {
   
    res.redirect('/')
})

module.exports = router;

