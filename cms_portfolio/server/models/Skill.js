const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Language', 'Framework', 'Tool', 'Database', 'Other'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    icon: String, // Optional: for displaying icons
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        default: 'Intermediate'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Skill', skillSchema);
