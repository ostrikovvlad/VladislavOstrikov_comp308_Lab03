const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
    Course.find()
        .then(courses => res.json(courses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const courseCode = req.body.courseCode;
    const courseName = req.body.courseName;
    const section = req.body.section;
    const semester = req.body.semester;

    const newCourse = new Course(
        {courseCode,
        courseName,
        section,
        semester
    });

    newCourse.save()
        .then(() => res.json('Course added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
      .then(course => res.json(course))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Course.findByIdAndDelete(req.params.id)
      .then(() => res.json('Course deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Course.findById(req.params.id)
      .then(course => {
        const courseCode = req.body.courseCode;
        const courseName = req.body.courseName;
        const section = req.body.section;
        const semester = req.body.semester;
  
        course.save()
          .then(() => res.json('Course updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });