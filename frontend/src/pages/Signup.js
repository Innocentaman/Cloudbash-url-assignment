import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        const response = await fetch('https://url-analyzer.onrender.com/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        if (response.ok) navigate('/login');
    };

    const redirectToLogin = () => {
        navigate('/login'); // Redirect to the Login page
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-4 p-2 w-full border rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-4 p-2 w-full border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-4 p-2 w-full border rounded"
                />
                <button onClick={handleSignup} className="w-full mt-6 p-2 bg-blue-500 text-white rounded">
                    Sign Up
                </button>
                <div className="text-center mt-4">
                    <p className="text-gray-600">Already a registered user?</p>
                    <button onClick={redirectToLogin} className="text-blue-500 underline mt-2">
                        Login here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
