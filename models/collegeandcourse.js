const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    logo: {
        main: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    courses: [
        {
            name: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true,
                enum: [
                    'Engineering',
                    'Science',
                    'Arts',
                    'Commerce',
                    'Management',
                    'Computer Applications',
                    'Architecture',
                    'Pharmacy',
                    'Education',
                    'Law',
                    'Diploma',
                    'Doctorate'
                ]
            }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('College', collegeSchema);
