import { useState } from "react";
import axios from "axios";
import API from "../config/api"
import { useNavigate } from "react-router-dom";
import { Loader2 } from 'lucide-react';
import { useEffect } from "react";

const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/admin', { replace: true });
        }
    }, [navigate]);


    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post(`${API}/auth/login`, {
                email,
                password,
            });
            const { token } = res.data;
            if (token) {
                localStorage.setItem('token', token);
                navigate('/admin');
            } else {
                alert('Login failed: no token returned.');
            }
        } catch (err) {
            console.log('Login Error:', err.response?.data || err.message)
            alert(err.response?.data?.message || 'Login failed');
            setIsLoading(false)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="w-full max-w-md border border-gray-700 p-8 bg-gray-800">
                <h3 className="font-semibold mb-6 text-center text-xl text-gray-100">Admin Login</h3>

                <form className="space-y-6">
                    {/* Email field */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-700 border border-gray-600 px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-400 focus:bg-gray-600 transition-colors"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Password field */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-gray-700 border border-gray-600 px-4 py-3 text-gray-300 focus:outline-none focus:border-purple-400 focus:bg-gray-600 transition-colors"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Login button */}
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="w-full border border-purple-400 text-purple-400 px-6 py-3 hover:bg-purple-400 hover:text-gray-900 transition-colors font-medium"
                    >
                        {loading ? <>
                            <div className="flex items-center justify-center">
                                <Loader2 className="animate-spin text-purple-400" />
                            </div>
                        </> : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;