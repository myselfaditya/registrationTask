const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    FirstName: { type: String, required: true, trim: true },
    LastName: { type: String, required: true, trim: true },
    Email: { type: String, required: true, trim: true, unique: true },
    Phone: { type: Number, required: true, trim: true},
    Password: { type: String, required: true, trim: true },
}, { timestamps: true })

module.exports = mongoose.model('register', registerSchema)