var express = require('express');
var router = express.Router();
var Response = require('../models/response');

/* GET home page. */
    
router.get('/*', function (req, res) {
  res.render('index', { title: 'What are the roots that clutch, what branches grow/What are the roots that clutch, what branches grow' });
});

router.post('/message', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    
    var newResponse = new Response();
        newResponse.name = name;
        newResponse.email = email;
        newResponse.message = message;
        newResponse.date = new Date();
    
    newResponse.save(function(err, success){
            if(err) {
                res.send(err)
            }
            else
                res.send(newResponse)
        })
    
})

module.exports = router;