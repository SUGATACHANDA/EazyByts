import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../api/projectApi';

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await getAllProjects();
                setProjects(res || []);
            } catch (err) {
                console.error('Failed to fetch projects', err);
            }
        };

        fetchProjects();
    }, []);

    const completeApps = projects.filter((p) => p.liveURL || p.githubURL);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <Sidebar />

            <div className="ml-16 pt-20">
                <main className="px-8 py-12 max-w-7xl mx-auto relative">
                    {/* Decorative dots on left */}
                    <div className="absolute left-0 top-1/4 hidden lg:block">
                        <div className="grid grid-cols-3 gap-1">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative dots on right */}
                    <div className="absolute right-0 top-2/3 hidden lg:block">
                        <div className="grid grid-cols-3 gap-1">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Page title */}
                    <div className="mb-16">
                        <h1 className="text-4xl font-bold mb-2">
                            <span className="text-purple-400">/</span>projects
                        </h1>
                        <p className="text-gray-400">List of my projects</p>
                    </div>

                    {/* Complete Apps Section */}
                    {completeApps.length > 0 ? (
                        <section className="mb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {completeApps.map((project) => (
                                    <ProjectCard key={project._id} project={project} />
                                ))}
                            </div>
                        </section>
                    ) : (
                        <p className="text-gray-400 text-center mt-12">
                            No projects found. Please check back later.
                        </p>
                    )}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ProjectsPage;
