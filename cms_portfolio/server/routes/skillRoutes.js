const express = require('express');
const Skill = require('../models/Skill.js');

const router = express.Router();

// Create new skill (Admin only)
router.post('/', async (req, res) => {
    try {
        const skill = new Skill(req.body);
        await skill.save();
        res.status(201).json(skill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all skills (Public)
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find().sort({ category: 1, name: 1 });
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch skills' });
    }
});

// Get single skill (Admin use)
router.get('/:id', async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);
        if (!skill) return res.status(404).json({ message: 'Skill not found' });
        res.json(skill);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID' });
    }
});

// Update skill (Admin only)
router.put('/:id', async (req, res) => {
    try {
        const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(skill);
    } catch (err) {
        res.status(400).json({ message: 'Failed to update skill' });
    }
});

// Delete skill (Admin only)
router.delete('/:id', async (req, res) => {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.json({ message: 'Skill deleted' });
    } catch (err) {
        res.status(400).json({ message: 'Failed to delete skill' });
    }
});

module.exports = router;
