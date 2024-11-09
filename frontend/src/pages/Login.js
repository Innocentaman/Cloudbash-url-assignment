import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await fetch('https://url-analyzer.onrender.com/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Store the token in local storage
            navigate('/home');
        } else {
            console.error('Login failed');
        }
    };

    const redirectToSignUp = () => {
        navigate('/'); // Redirect to the Sign Up page
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold text-center">Login</h2>
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
                <button onClick={handleLogin} className="w-full mt-6 p-2 bg-blue-500 text-white rounded">
                    Login
                </button>
                <div className="text-center mt-4">
                    <p className="text-gray-600">New user?</p>
                    <button onClick={redirectToSignUp} className="text-blue-500 underline mt-2">
                        Sign up here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
