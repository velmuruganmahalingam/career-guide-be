const mongoose = require('mongoose');

const createEnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    studyInterest: {
        type: String,
        enum: ["Domestic", "International"],
        required: false
    },
    stdQualification: {
        type: String,
        required: false,
    },
    enquiryDate: {
        type: Date,
        default: Date.now
    },
    source: {
        type: String,
        enum: ['Google', 'Online-ads', 'Referral'],
        default: 'Google'
    },
    customeSource: {
        type: String,
        required: function () {
            return this.source === 'Others'
        }
    },
    followUpStatus: {
        type: String,
        enum: ['Pending', 'Contacted', 'Converted'],
        default: 'Pending'
    }

}, { timestamps: true });

module.exports = mongoose.model('enquiry', createEnquirySchema)