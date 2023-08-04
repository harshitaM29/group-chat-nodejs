const express = require('express');
const fs = require('fs')

const router = express.Router();


router.get('/',(req,res,next) => {
    fs.readFile('message.txt', 'utf8', function(err, data) {
        if(err) {
          console.log(err)
        }
        res.send(`<h1>${data}</h1> <form action="/send" method="POST" onsubmit="document.getElementById('username').value =localStorage.getItem('username');">
        <input type="text" name="chat">
        <input type="hidden" id="username" name="username">
        <button type="submit">
        Send</button></form>`);
       
        });
   
});

router.post('/send',(req,res,next) => {
 
   fs.appendFile('message.txt',`${req.body.username} : ${req.body.chat}`,(err) => {
        res.status(302)
        
        return res.end();
   })
    res.redirect('/')
})

module.exports = router
