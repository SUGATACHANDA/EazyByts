const express = require('express');
const FunFact = require('../models/FunFact.js');

const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const fact = new FunFact(req.body);
        await fact.save();
        res.status(201).json(fact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Read all
router.get('/', async (req, res) => {
    try {
        const facts = await FunFact.find().sort({ createdAt: -1 });
        res.json(facts);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch fun facts' });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const fact = await FunFact.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(fact);
    } catch (err) {
        res.status(400).json({ message: 'Update failed' });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await FunFact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(400).json({ message: 'Delete failed' });
    }
});

module.exports = router;
