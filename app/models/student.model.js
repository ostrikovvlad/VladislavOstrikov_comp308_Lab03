const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema( {
    studentNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        min: 9,
        max: 9
    }, 
    password: {
        type: String, 
        required: true,
        min: 6,
        trim: true,
        validate: [
            (password) => password.length >= 6,
            'Password Should be Longer'
        ]
    },
    email: {
		type: String,
		// Set an email index
		index: true,
        unique: true,
        trim: true,
		// Validate the email format
		match: /.+\@.+\..+/
	},
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: 10
    },
    program: {
        type: String,
        required: true
    }
});

StudentSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
