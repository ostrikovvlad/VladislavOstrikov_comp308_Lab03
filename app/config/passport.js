const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Student = require('../models/student.model');
//const Student = require('mongoose').model('Student');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({studentNumberField : 'studentNumber'},(studentNumber,password,done)=> {
                //match user
                Student.findOne({studentNumber : studentNumber})
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
        Student.findById(id, function(err, user) {
          done(err, user);
        });
      }); 
}; 