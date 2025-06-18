const mongoose = require('mongoose');

const funFactSchema = new mongoose.Schema({
    title: { type: String, required: true },
    value: { type: String, required: true },
    icon: { type: String }, // Optional
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FunFact', funFactSchema);
