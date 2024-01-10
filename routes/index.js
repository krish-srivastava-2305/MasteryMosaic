var express = require('express');
// var expressSession = require('express-session')
var router = express.Router();
const userModel = require('./users')
const NGOModel = require('./NGOs')
const passport = require('passport');
const localStrategy = require('passport-local')
passport.use(new localStrategy(userModel.authenticate()))

router.get('/', function(req, res, next) {
  res.render('index',{account : "Log In"});
});

router.get('/log-in',function(req,res){
  res.render("logIn",{account:"Sign Up"})
})

router.get("/signUp",function(req,res){
  res.render("signup",{account:"Log In"})
})

router.post('/register',function(req,res){
  const { firstName, lastName, email, mobileNumber, dateOfBirth, username, password } = req.body;
  const newUser = new userModel({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    mobileNumber: mobileNumber,
    dateOfBirth: dateOfBirth
  });
  
  userModel.register(newUser,password)
    .then(function(registereduser){
      req.flash('username',username)
      passport.authenticate("local")(req, res, function(){
        res.redirect('/profile')
      })
    })
})

router.post('/login',passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/log-in"
}),function(req,res){ 
  req.flash('username',req.body.username)
})

router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err){return next(err)}
    res.redirect('index')
  })
})

router.get('/profile',isLoggedIn,function(req,res){
  const username = req.user.username
  console.log(username)
  res.render("index",{account : username })
})

router.get('/NGOs',async function(req,res){
  const username = req.user.username 
  const ngos= await NGOModel.find();
  res.render("ngo",{account:username , ngos})
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect("index")
}

module.exports = router;
