// src/components/SkillList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../config/api';

const SkillList = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    const categories = ['Language', 'Framework', 'Tool', 'Database', 'Other'];

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await axios.get(`${API}/skills`);
                setSkills(res.data || []);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch skills:', err);
            }
        };

        fetchSkills();
    }, []);

    const groupedSkills = categories.reduce((acc, category) => {
        acc[category] = skills.filter((skill) => skill.category === category);
        return acc;
    }, {});

    if (loading) return <p className='text-black'>Loading skills...</p>;

    return (
        <div className="space-y-6">
            {categories.map((category) => (
                <div key={category}>
                    <h3 className="text-lg font-semibold text-purple-600 mb-2">
                        {category}s
                    </h3>
                    {groupedSkills[category].length > 0 ? (
                        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {groupedSkills[category].map((skill) => (
                                <li
                                    key={skill._id}
                                    className="bg-gray-100 text-gray-800 px-3 py-2 rounded shadow-sm"
                                >
                                    <div className="font-medium">{skill.name}</div>
                                    <div className="text-xs text-gray-500">{skill.level}</div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-400">No {category}s added yet.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SkillList;
