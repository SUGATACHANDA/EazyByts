/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Menu, X, Loader2 } from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAdminEmail, getContactMessages } from '../api/dashboardApi';
import ContactTab from '../components/ContactTab';
import SkillList from '../components/SkillTab';
import SkillManager from '../components/SkillManager';
import FunFactManager from '../components/FunFactManager';
import ProjectManager from '../components/ProjectManager';

const Dashboard = () => {
    const [email, setEmail] = useState('');
    const [messages, setMessages] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const tabs = ['contact', 'skills', 'projects', 'fun facts'];
    const currentTab = searchParams.get('tab') || 'contact';

    const handleTabChange = (tab) => {
        setSearchParams({ tab });
        setMenuOpen(false); // close menu on selection
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin-login', { replace: true });
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin-login', { replace: true });
            return;
        }

        const fetchData = async () => {
            try {
                const decoded = jwtDecode(token);
                const userId = decoded.id;

                const emailRes = await getAdminEmail(token);
                setEmail(emailRes);

                if (currentTab === 'contact') {
                    const messageRes = await getContactMessages(token);
                    setMessages(messageRes || []);
                }

                setLoading(false);
            } catch (err) {
                localStorage.removeItem('token');
                navigate('/admin-login', { replace: true });
            }
        };

        fetchData();
    }, [currentTab, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
                <Loader2 className="animate-spin mr-2" /> Loading Dashboard
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl sm:text-3xl text-black font-bold">Dashboard</h1>
                {/* Mobile Menu Toggle */}
                <button
                    className="sm:hidden p-2 rounded bg-purple-600 text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Hamburger Menu Content (mobile) */}
            {menuOpen && (
                <div className="sm:hidden mb-6 bg-white p-4 rounded shadow space-y-4">

                    <nav className="flex flex-col gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`text-left px-4 py-2 rounded capitalize ${currentTab === tab
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                    <div className="text-sm text-gray-700 bg-gray-100 px-3 py-2 rounded">
                        {email}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            )}

            {/* Desktop View: Tabs + Info */}
            <div className="hidden sm:flex justify-between items-center mb-6">

                <nav className="flex gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabChange(tab)}
                            className={`px-4 py-2 rounded capitalize ${currentTab === tab
                                ? 'bg-purple-600 text-white'
                                : 'bg-white text-gray-700 border hover:bg-purple-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
                <div className="flex gap-4 items-center">
                    <span className="text-sm text-gray-700 bg-white px-3 py-1 rounded-full shadow">
                        {email}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-white p-4 sm:p-6 rounded shadow">
                {currentTab === 'contact' && (
                    <ContactTab
                        messages={messages}
                        filter={filter}
                        setFilter={setFilter}
                    />
                )}

                {currentTab === 'skills' && (
                    <>
                        {/* <SkillList /> */}
                        <SkillManager />
                    </>
                )}

                {currentTab === 'projects' && (
                    <ProjectManager />
                )}

                {currentTab === 'fun facts' && (
                    <FunFactManager />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
