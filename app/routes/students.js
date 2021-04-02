const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const studentNumber = Number(req.body.studentNumber);
    const password = req.body.password;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const city = req.body.city;
    const phoneNumber = req.body.phoneNumber;
    const program = req.body.program;

    const newStudent = new Student
        ({studentNumber, password, email, firstName, lastName, address, city, phoneNumber, program});

        bcrypt.genSalt(10,(err,salt)=> 
        bcrypt.hash(newStudent.password,salt,
            (err,hash)=> {
                if(err) throw err;
                    //save pass to hash
                    newStudent.password = hash;

    newStudent.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json('Error: ' + err));
            }))
});

module.exports = router;

