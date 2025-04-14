const mongoose = require("mongoose");

const EducationLevelSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    label: {
        type: String,
        required: true,
        trim: true,
    },
    order: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("EducationLevel", EducationLevelSchema);
