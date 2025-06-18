import { useEffect, useState } from 'react';
import { getAllSkills } from '../api/skillApi';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    const categories = ['Language', 'Framework', 'Tool', 'Database', 'Other'];

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const data = await getAllSkills();
                setSkills(data || []);
            } catch (err) {
                console.error('Failed to fetch skills:', err);
            }
        };

        fetchSkills();
    }, []);

    // Group skills by category
    const groupedSkills = categories.map((cat) => ({
        title: cat + (cat === 'Other' ? '' : 's'),
        skills: skills.filter((s) => s.category === cat).map((s) => s.name)
    }));

    return (
        <section className="px-8 py-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
                <span className="text-purple-400">#</span>skills
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="relative">
                    {/* Decorative elements */}
                    <div className="grid grid-cols-4 gap-4 opacity-20">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-4 h-4 border border-gray-600"></div>
                        ))}
                    </div>

                    <div className="absolute top-20 left-20 w-24 h-24 border-2 border-gray-600"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-gray-600"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {groupedSkills.map((category, index) => (
                        <div key={index} className="border border-gray-600">
                            <div className="bg-gray-800 px-4 py-2 border-b border-gray-600">
                                <h3 className="font-semibold">{category.title}</h3>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.length > 0 ? (
                                        category.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="text-gray-300 text-sm">
                                                {skill}
                                                {skillIndex < category.skills.length - 1 && ','}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-500 text-sm">No skills yet.</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
