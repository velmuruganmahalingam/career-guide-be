const mongoose = require("mongoose");

const CourseCategorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    icon: {
        type: String,
        required: true,
    },
    iconColor: {
        type: String,
        default: "blue-500",
    },
});

module.exports = mongoose.model("CourseCategory", CourseCategorySchema);
