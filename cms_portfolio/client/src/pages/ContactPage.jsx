import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import API from '../config/api';
import { Loader } from 'lucide-react'; // assuming you're using this loader

const ContactsPage = () => {
    const [loading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post(`${API}/contact`, formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', title: '', message: '' });
        } catch (err) {
            console.error(err);
            alert('Failed to send message.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header activeLink="contacts" />
            <Sidebar />

            <div className="ml-16 pt-20">
                <main className="px-8 py-12 max-w-7xl mx-auto relative">
                    {/* Decorative dots left */}
                    <div className="absolute left-0 top-1/3 hidden lg:block">
                        <div className="grid grid-cols-3 grid-rows-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative dots right */}
                    <div className="absolute right-0 bottom-1/4 hidden lg:block">
                        <div className="grid grid-cols-3 grid-rows-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Two columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                        {/* Left: Intro */}
                        <div>
                            <div className="mb-8">
                                <h1 className="text-4xl font-bold mb-2">
                                    <span className="text-purple-400">/</span>contacts
                                </h1>
                                <p className="text-gray-400">Who am I?</p>
                            </div>
                            <div className="mt-8">
                                <p className="text-gray-300 leading-relaxed">
                                    I'm interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me.
                                </p>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div>
                            <div className="border border-gray-700 p-6">
                                <h3 className="font-semibold mb-4">Message me here</h3>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400"
                                            required
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400"
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400 resize-none"
                                        required
                                    ></textarea>

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="border border-purple-400 text-purple-400 px-6 py-2 hover:bg-purple-400 hover:text-gray-900 transition-colors flex items-center justify-center"
                                        >
                                            {loading ? (
                                                <Loader className="animate-spin w-5 h-5" />
                                            ) : (
                                                'Send'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default ContactsPage;
