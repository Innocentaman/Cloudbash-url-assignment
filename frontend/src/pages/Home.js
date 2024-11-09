import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [url, setUrl] = useState('');
    const [topN, setTopN] = useState(10);
    const [topWords, setTopWords] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect to login if token is not found
        }
    }, [navigate]);

    const handleAnalyze = async () => {
        const response = await fetch('https://url-analyzer.onrender.com/api/analyze-url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, topN })
        });
        const data = await response.json();
        setTopWords(data.topWords || []);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-lg p-8 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">Home - URL Text Analyzer</h1>
                <input
                    type="text"
                    placeholder="URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mb-4 w-full p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Top N Words"
                    value={topN}
                    onChange={(e) => setTopN(e.target.value)}
                    className="mb-4 w-full p-2 border rounded"
                />
                <button onClick={handleAnalyze} className="w-full p-2 bg-blue-500 text-white rounded">
                    Analyze
                </button>
                <ul className="mt-6">
                    {topWords.map((wordData, index) => (
                        <li key={index} className="flex justify-between p-2 bg-gray-50 rounded mt-2">
                            <span>{wordData.word}</span>
                            <span>Count: {wordData.count}</span>
                        </li>
                    ))}
                </ul>
                <button onClick={handleLogout} className="w-full p-2 bg-red-500 text-white rounded mt-6">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
