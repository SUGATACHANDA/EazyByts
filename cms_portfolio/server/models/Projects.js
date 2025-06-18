const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    technologies: [String],
    liveURL: String,
    githubURL: String,
    featured: { type: Boolean, default: false }, // <-- NEW FIELD
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
