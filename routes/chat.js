const express = require('express');
const fs = require('fs')

const router = express.Router();


router.get('/',(req,res,next) => {
    fs.readFile('message.txt', 'utf8', function(err, data) {
        if(err) {
          console.log(err)
        }
        res.send(`<h1>${data}</h1> <form action="/send" method="POST"><input type="text" name="chat"><button type="submit">Send</button></form>`);
       
        });
   
});

router.post('/send',(req,res,next) => {
   fs.appendFile('message.txt',Object.values(req.body).toString(),(err) => {
        res.status(302)
        
        return res.end();
   })
    res.redirect('/')
})

module.exports = router
