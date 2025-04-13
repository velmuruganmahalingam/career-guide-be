const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    stdQualification: {
        qualification: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["pursuing", "completed"],
            required: true
        }
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    studyInterest: {
        field: { type: String },
        type: {
            type: String,
            enum: ['Domestic', 'International'],
            default: 'Domestic'
        }
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    upload: [{
        fileName: String,
        fileType: String,
        url: String
    }],
    enquiryDate: {
        type: Date,
        default: Date.now,
    },
    source: {
        type: String,
        enum: ['Enquiry', 'Walkin', 'Referral', 'Online-Ads'],
        default: 'enquiry'
    },
    registrationStatus: {
        type: String,
        enum: ['Enquire', 'Register', 'Reject'],
        default: 'enquired'
    },
    registeredDate: {
        type: Date,
        default: Date.now
    },

}, { timeStamps: true })

module.exports = mongoose.model('student', studentSchema)