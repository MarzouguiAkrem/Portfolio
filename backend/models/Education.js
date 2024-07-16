const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    specialty: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
