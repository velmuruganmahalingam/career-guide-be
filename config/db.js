const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error(err.message);
        throw new Error("Failed to connect the database");
    }
};

module.exports = connectDB