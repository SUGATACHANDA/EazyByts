import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { getAllSkills } from '../api/skillApi';
import { getFunFacts } from '../api/funFactApi';
import dev_image from "../../public/dev_image.png"

const AboutMePage = () => {

    const [funFacts, setFunFacts] = useState([]);

    // Fun Facts
    useEffect(() => {
        const fetchFunFacts = async () => {
            try {
                const res = await getFunFacts();
                setFunFacts(res || []);
            } catch (err) {
                console.error('Failed to fetch fun facts:', err);
            }
        };

        fetchFunFacts();
    }, []);

    const [skills, setSkills] = useState([])

    const categories = ['Language', 'Framework', 'Tool', 'Database', 'Other'];

    // Skills
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
        <div className="bg-gray-900 text-white min-h-screen">
            <Header />
            <Sidebar />

            <div className="ml-16 pt-20">
                <main className="px-8 py-12 max-w-7xl mx-auto relative">
                    {/* Decorative dots on left */}
                    <div className="absolute left-0 top-1/4 hidden lg:grid grid-cols-3 gap-1">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        ))}
                    </div>

                    {/* Page title */}
                    <div className="mb-16">
                        <h1 className="text-4xl font-bold mb-2">
                            <span className="text-purple-400">/</span>about-me
                        </h1>
                        <p className="text-gray-400">Who am I?</p>
                    </div>

                    {/* About Me Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                        <div className="space-y-6">
                            <p className="text-gray-300">
                                Hello, i'm Sugata!
                            </p>

                            <p className="text-gray-300">
                                I'm a self-taught front-end developer based in Kolkata, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                            </p>

                            <p className="text-gray-300">
                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </p>
                        </div>

                        <div className="relative">
                            <img
                                src={dev_image}
                                alt="Sugata - Web Designer and Front-end Developer"
                                className="w-full max-w-md mx-auto z-10 relative"
                            />

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 grid grid-cols-5 gap-1 z-0">
                                {[...Array(25)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                ))}
                            </div>

                            <div className="absolute -bottom-4 -right-4 grid grid-cols-5 gap-1 z-0">
                                {[...Array(25)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                                ))}
                            </div>

                            <div className="absolute top-1/4 -right-8 w-16 h-16 border-2 border-purple-400 z-0"></div>
                            <div className="absolute bottom-1/4 -left-8 w-12 h-12 border-2 border-purple-400 z-0"></div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="text-purple-400">#</span>skills
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {groupedSkills.map((category, index) => (
                                <div key={index} className="border border-gray-700">
                                    <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
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
                    </section>

                    {/* Fun Facts Section */}
                    <section className="mb-24 relative">
                        <h2 className="text-3xl font-bold mb-8">
                            <span className="text-purple-400">#</span>my-fun-facts
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                            {funFacts.length === 0 ? (
                                <p className="text-gray-500 text-sm">No fun facts found.</p>
                            ) : (
                                funFacts.map((fact, index) => (
                                    <div key={index} className="border border-gray-700 px-4 py-2">
                                        <span className="font-semibold">{fact.value}</span>
                                    </div>
                                ))
                            )}

                        </div>

                        {/* Decorative elements */}
                        <div className="absolute right-0 bottom-0 hidden lg:block">
                            <div className="relative w-32 h-32">
                                <div className="absolute top-0 left-0 w-24 h-24 border-2 border-purple-400"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-purple-400"></div>
                            </div>
                        </div>

                        {/* Decorative dots on right */}
                        <div className="absolute right-0 top-1/4 hidden lg:grid grid-cols-4 gap-1">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default AboutMePage;