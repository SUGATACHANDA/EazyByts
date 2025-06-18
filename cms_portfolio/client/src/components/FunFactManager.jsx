import React, { useEffect, useState } from 'react';
import {
    getFunFacts,
    addFunFact,
    updateFunFact,
    deleteFunFact
} from '../api/funFactApi';

const FunFactManager = () => {
    const [facts, setFacts] = useState([]);
    const [form, setForm] = useState({ title: '', value: '', icon: '' });
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const fetchFacts = async () => {
        try {
            const data = await getFunFacts();
            setFacts(data || []);
        } catch (err) {
            console.error('Error fetching fun facts', err);
        }
    };

    useEffect(() => {
        fetchFacts();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await updateFunFact(editingId, form);
            } else {
                await addFunFact(form);
            }
            setForm({ title: '', value: '', icon: '' });
            setEditingId(null);
            setShowForm(false);
            fetchFacts();
        } catch (err) {
            console.log(err);
            alert('Failed to save.');
        }
    };

    const handleEdit = (fact) => {
        setForm(fact);
        setEditingId(fact._id);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this fun fact?')) {
            await deleteFunFact(id);
            fetchFacts();
        }
    };

    return (
        <div className="space-y-6">
            {/* Header with toggle button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <h2 className="text-xl text-black font-semibold">Fun Facts About Me</h2>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        if (!showForm) {
                            setForm({ title: '', value: '', icon: '' });
                            setEditingId(null);
                        }
                    }}
                    className={`px-4 py-2 rounded font-medium ${showForm ? 'bg-gray-600 text-white' : 'bg-purple-600 text-white'
                        }`}
                >
                    {showForm ? 'Cancel' : 'Add Fun Fact'}
                </button>
            </div>

            {/* Form */}
            {showForm && (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 rounded shadow space-y-3 border"
                >
                    <h2 className="text-lg text-black font-semibold">
                        {editingId ? 'Edit Fun Fact' : 'Add Fun Fact'}
                    </h2>

                    <input
                        name="title"
                        placeholder="Title (e.g., Projects)"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border text-black px-3 py-2 rounded"
                        required
                    />

                    <input
                        name="value"
                        placeholder="Value (e.g., 10+)"
                        value={form.value}
                        onChange={handleChange}
                        className="w-full text-black border px-3 py-2 rounded"
                        required
                    />

                    <input
                        name="icon"
                        placeholder="Icon URL (optional)"
                        value={form.icon}
                        onChange={handleChange}
                        className="w-full text-black border px-3 py-2 rounded"
                    />

                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                        {editingId ? 'Update Fun Fact' : 'Add Fun Fact'}
                    </button>
                </form>
            )}

            {/* Facts Grid */}
            {facts.length === 0 ? (
                <p className="bg-yellow-100 text-yellow-700 p-4 rounded text-center shadow">
                    No fun facts about you found.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {facts.map((fact) => (
                        <div key={fact._id} className="bg-gray-100 p-4 rounded shadow">
                            {/* {fact.icon && (
                                <img
                                    src={fact.icon}
                                    alt={fact.title}
                                    className="w-10 h-10 text-black object-contain mb-2"
                                    onError={(e) => (e.target.style.display = 'none')}
                                />
                            )} */}
                            <h3 className="font-bold text-black text-lg">{fact.value}</h3>
                            <p className="text-gray-700">{fact.title}</p>
                            <div className="mt-2 flex gap-3 text-sm">
                                <button
                                    onClick={() => handleEdit(fact)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(fact._id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FunFactManager;
