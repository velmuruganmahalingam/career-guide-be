const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EducationLevel",
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseCategory",
        required: true,
    },
    details: {
        duration: String,
        eligibility: String,
        career: [String],
        curriculum: [String],
    },
    active: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model("Course", CourseSchema);
