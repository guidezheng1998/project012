import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenericPage from './pages/GenericPage';
import LLMPage from './pages/LLMPage';

const menuItems = [
    { name: '首页', path: '/' },
    { name: '通用功能 1', path: '/generic1' },
    { name: '通用功能 2', path: '/generic2' },
    { name: '大语言模型交互', path: '/llm' }
];

const App = () => {
    return (
        <Router>
            <div className="flex h-screen">
                <div className="w-64 bg-gray-800 text-white">
                    <ul className="p-4 space-y-2">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="block p-2 hover:bg-gray-700 rounded">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 p-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {menuItems.slice(1, -1).map((item, index) => (
                            <Route key={index} path={item.path} element={<GenericPage pageName={item.name} endpoint={item.path.slice(1)} />} />
                        ))}
                        <Route path="/llm" element={<LLMPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;   