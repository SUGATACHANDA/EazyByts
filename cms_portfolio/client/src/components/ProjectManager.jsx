import React, { useEffect, useState } from 'react';
import {
    getAllProjects,
    addProject,
    updateProject,
    deleteProject
} from '../api/projectApi';

const ProjectManager = () => {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState({
        title: '',
        description: '',
        image: '',
        technologies: '',
        liveURL: '',
        githubURL: '',
        featured: false
    });
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const data = await getAllProjects();
            setProjects(data || []);
        } catch (err) {
            console.error('Failed to fetch projects', err);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const formatURL = (url) =>
        url?.startsWith('http://') || url?.startsWith('https://') ? url : `https://${url}`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...form,
            technologies: form.technologies.split(',').map((t) => t.trim()),
            featured: form.featured,
            liveURL: formatURL(form.liveURL),
            githubURL: formatURL(form.githubURL),
        };

        try {
            if (editingId) {
                await updateProject(editingId, payload);
            } else {
                await addProject(payload);
            }
            setForm({
                title: '',
                description: '',
                image: '',
                technologies: '',
                liveURL: '',
                githubURL: '',
                cachedURL: '',
                figmaURL: ''
            });
            setEditingId(null);
            setShowForm(false);
            fetchProjects();
        } catch (err) {
            console.log(err)
            alert('Failed to save project.');
        }
    };

    const handleEdit = (project) => {
        setForm({
            title: project.title,
            description: project.description,
            image: project.image,
            technologies: project.technologies.join(', '),
            liveURL: project.liveURL || '',
            githubURL: project.githubURL || '',
            featured: project.featured || false
        });
        setEditingId(project._id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            await deleteProject(id);
            fetchProjects();
        }
    };

    return (
        <div className="space-y-6">
            {/* Header + Add Button */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl text-black font-semibold">My Projects</h2>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        if (!showForm) {
                            setEditingId(null);
                            setForm({
                                title: '',
                                description: '',
                                image: '',
                                technologies: '',
                                liveURL: '',
                                githubURL: '',
                                cachedURL: '',
                                figmaURL: ''
                            });
                        }
                    }}
                    className={`px-4 py-2 rounded font-medium ${showForm ? 'bg-gray-600 text-white' : 'bg-purple-600 text-white'
                        }`}
                >
                    {showForm ? 'Cancel' : 'Add Project'}
                </button>
            </div>

            {/* Form */}
            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 rounded shadow space-y-3 border"
                >
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Project Title"
                        className="w-full text-black border px-3 py-2 rounded"
                        required
                    />

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Project Description"
                        className="w-full text-black border px-3 py-2 rounded"
                        required
                    />

                    <input
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="w-full text-black border px-3 py-2 rounded"
                    />

                    <input
                        name="technologies"
                        value={form.technologies}
                        onChange={handleChange}
                        placeholder="Technologies (comma-separated)"
                        className="w-full text-black border px-3 py-2 rounded"
                    />

                    <input
                        name="liveURL"
                        value={form.liveURL}
                        onChange={handleChange}
                        placeholder="Live URL"
                        className="w-full text-black border px-3 py-2 rounded"
                    />

                    <input
                        name="githubURL"
                        value={form.githubURL}
                        onChange={handleChange}
                        placeholder="GitHub URL"
                        className="w-full text-black border px-3 py-2 rounded"
                    />

                    <label className="flex items-center gap-2 text-sm text-gray-800">
                        <input
                            type="checkbox"
                            name="featured"
                            checked={form.featured}
                            onChange={(e) =>
                                setForm({ ...form, featured: e.target.checked })
                            }
                        />
                        Show on Home Page
                    </label>


                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                        {editingId ? 'Update Project' : 'Add Project'}
                    </button>
                </form>
            )}

            {/* Display Projects */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project._id} className="bg-gray-100 p-4 rounded shadow space-y-2">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-sm text-gray-700">{project.description}</p>
                        <div className="text-sm text-purple-700">
                            {(project.technologies || []).join(', ')}
                        </div>
                        <div className="flex gap-3 text-sm mt-2 flex-wrap">
                            {project.liveURL && (
                                <a
                                    href={formatURL(project.liveURL)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live
                                </a>
                            )}
                            {project.githubURL && (
                                <a
                                    href={formatURL(project.githubURL)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:underline"
                                >
                                    GitHub
                                </a>
                            )}
                            {project.figmaURL && (
                                <a
                                    href={formatURL(project.figmaURL)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-600 hover:underline"
                                >
                                    Figma
                                </a>
                            )}
                            {project.cachedURL && (
                                <a
                                    href={formatURL(project.cachedURL)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:underline"
                                >
                                    Cached
                                </a>
                            )}
                        </div>
                        <div className="flex gap-3 text-sm">
                            <button
                                onClick={() => handleEdit(project)}
                                className="text-blue-600 hover:underline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(project._id)}
                                className="text-red-600 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectManager;
