const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
//const User = require('../app/models/user.server.model');
const User = require('mongoose').model('User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({studentNumberField : 'studentNumber'},(studentNumber,password,done)=> {
                //match user
                User.findOne({studentNumber : studentNumber})
                .then((user)=>{
                 if(!user) {
                     return done(null,false,{message : 'that studentNumber is not registered'});
                 }

                 //match pass
                 bcrypt.compare(password,user.password,(err,isMatch)=>{
                     if(err) throw err;

                     if(isMatch) {
                         return done(null,user);
                     } else {
                         return done(null,false,{message : 'pass incorrect'});
                     }
                 })
                })
                .catch((err)=> {console.log(err)})
        })
        
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 