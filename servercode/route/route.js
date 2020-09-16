var express = require('express');
var router = express.Router();
const Users = require('../model/users');
const Videos = require('../model/videos');

router.get('/users', (req,res,next)=>{
    Users.find(function(err,users){
        if(err){
            res.json(err);
        }
        else{
            res.json(users);
        }
    })
});
/*
router.get('/show/:id', function(req, res, next) {

    var posts = db.get('posts');
  
    posts.findById(req.params.id, function(err, post){
      res.render('show',{
        "post": post
      });
    });
  });
*/
/*
router.get('/videos:userName', (req,res,next)=>{
    Videos.find(function(err,videos){
        if(err){
            res.json(err);
        }
        else{
            res.json(videos);
        }
    })
});
*/
router.get('/videos', (req,res,next)=>{
    Videos.find(function(err,videos){
        if(err){
            res.json(err);
        }
        else{
            res.json(videos);
        }
    })
});

router.delete('/users/:id', (req,res,next)=>{
    Response.remove({_id:req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;
