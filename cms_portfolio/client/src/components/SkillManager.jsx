import React, { useEffect, useState } from 'react';
import {
    getAllSkills,
    addSkill,
    updateSkill,
    deleteSkill
} from '../api/skillApi';

const categories = ['Language', 'Framework', 'Tool', 'Database', 'Other'];
const levels = ['Beginner', 'Intermediate', 'Advanced'];

const SkillManager = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ name: '', category: '', level: 'Intermediate' });
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const fetchSkills = async () => {
        try {
            const data = await getAllSkills();
            setSkills(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching skills:', err);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await updateSkill(editingId, form);
            } else {
                await addSkill(form);
            }
            setForm({ name: '', category: '', level: 'Intermediate' });
            setEditingId(null);
            setShowForm(false);
            fetchSkills();
        } catch (err) {
            console.log(err)
            alert('Error saving skill.');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            await deleteSkill(id);
            fetchSkills();
        }
    };

    const handleEdit = (skill) => {
        setForm({ name: skill.name, category: skill.category, level: skill.level });
        setEditingId(skill._id);
        setShowForm(true);
    };

    const groupedSkills = categories.reduce((acc, cat) => {
        acc[cat] = skills.filter((s) => s.category === cat);
        return acc;
    }, {});

    return (
        <div className="space-y-8">
            {/* Right-aligned Add Skill Button */}
            <div className="flex justify-between">
                <h2 className="text-xl text-black font-semibold">My Skills</h2>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        if (!showForm) {
                            setEditingId(null);
                            setForm({ name: '', category: '', level: 'Intermediate' });
                        }
                    }}
                    className={`px-4 py-2 rounded font-medium ${showForm ? 'bg-gray-600 text-white' : 'bg-purple-600 text-white'
                        }`}
                >
                    {showForm ? 'Cancel' : 'Add Skill'}
                </button>
            </div>

            {/* Skill Form */}
            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 rounded shadow space-y-4 border"
                >
                    <h2 className="text-lg text-black font-bold">
                        {editingId ? 'Edit Skill' : 'Add New Skill'}
                    </h2>

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Skill Name"
                        className="w-full text-black border px-3 py-2 rounded"
                        required
                    />

                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full cursor-pointer text-black border px-3 py-2 rounded"
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>

                    <select
                        name="level"
                        value={form.level}
                        onChange={handleChange}
                        className="w-full text-black cursor-pointer border px-3 py-2 rounded"
                    >
                        {levels.map((lvl) => (
                            <option key={lvl} value={lvl}>
                                {lvl}
                            </option>
                        ))}
                    </select>

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        {editingId ? 'Update Skill' : 'Add Skill'}
                    </button>
                </form>
            )}

            {/* Skills List */}
            {loading ? (
                <p>Loading skills...</p>
            ) : (
                categories.map((cat) => (
                    <div key={cat}>
                        <h3 className="text-md font-semibold text-purple-600 mb-2">{cat}s</h3>
                        {groupedSkills[cat].length === 0 ? (
                            <p className="text-sm text-gray-500">No {cat}s added.</p>
                        ) : (
                            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {groupedSkills[cat].map((skill) => (
                                    <li
                                        key={skill._id}
                                        className="bg-gray-100 p-3 rounded shadow-sm flex justify-between items-center"
                                    >
                                        <div>
                                            <p className="font-medium text-black">{skill.name}</p>
                                            <p className="text-xs text-gray-500">{skill.level}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(skill)}
                                                className="text-blue-600 text-sm hover:underline"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(skill._id)}
                                                className="text-red-600 text-sm hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default SkillManager;
