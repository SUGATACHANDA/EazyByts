import { useEffect, useState } from 'react';
import { getAllProjects } from '../api/projectApi';

const Projects = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const allProjects = await getAllProjects();
                const filtered = allProjects.filter((p) => p.featured);
                setFeaturedProjects(filtered);
            } catch (err) {
                console.error('Failed to load projects:', err);
            }
        };

        fetchProjects();
    }, []);

    const formatURL = (url) =>
        url?.startsWith('http://') || url?.startsWith('https://') ? url : `https://${url}`;

    return (
        <section id="works" className="px-8 py-20 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold">
                    <span className="text-purple-400">#</span>projects
                </h2>
                <a href="/projects" className="text-purple-400 hover:underline">
                    View all ~~{'>'}
                </a>
            </div>

            {featuredProjects.length === 0 ? (
                <p className="text-gray-500 text-center text-lg">No featured projects available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <div key={project._id} className="border border-gray-600 bg-gray-800">
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {(project.technologies || []).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-sm text-gray-300 bg-gray-700 px-2 py-1"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>

                                <div className="flex space-x-4">
                                    {project.liveURL && (
                                        <a
                                            href={formatURL(project.liveURL)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-purple-400 text-purple-400 px-4 py-2 hover:bg-purple-400 hover:text-white transition-colors"
                                        >
                                            Live {'<~>'}
                                        </a>
                                    )}
                                    {project.githubURL && (
                                        <a
                                            href={formatURL(project.githubURL)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-gray-400 text-gray-400 px-4 py-2 hover:bg-gray-400 hover:text-black transition-colors"
                                        >
                                            GitHub {'>'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;
