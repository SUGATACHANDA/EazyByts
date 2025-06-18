const express = require('express');
const Project = require('../models/Projects');

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: 'Failed to create project', error: err });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch projects' });
    }
});

// READ ONE
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(400).json({ message: 'Invalid project ID' });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: 'Failed to update project' });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(400).json({ message: 'Failed to delete project' });
    }
});

module.exports = router;

