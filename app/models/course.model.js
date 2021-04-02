const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema( {
    courseCode: {
        type: String, 
        min: 6,
        max: 8,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    }
    
});

CourseSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;