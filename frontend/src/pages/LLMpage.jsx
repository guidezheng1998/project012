import React, { useState } from 'react';
import axios from 'axios';

const LLMPage = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [modelProvider, setModelProvider] = useState('openai');

    const handleSubmit = async () => {
        try {
            const res = await axios.post('/llm-interact', {
                prompt,
                model_provider: modelProvider
            });
            setResponse(res.data.response);
        } catch (error) {
            console.error('请求出错:', error);
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">与大语言模型交互</h1>
            <div className="mb-4">
                <label htmlFor="prompt" className="block text-gray-700 text-sm font-bold mb-2">
                    输入提示词:
                </label>
                <textarea
                    id="prompt"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="modelProvider" className="block text-gray-700 text-sm font-bold mb-2">
                    选择模型提供商:
                </label>
                <select
                    id="modelProvider"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={modelProvider}
                    onChange={(e) => setModelProvider(e.target.value)}
                >
                    <option value="openai">OpenAI</option>
                    <option value="ollama">Ollama</option>
                </select>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
            >
                提交
            </button>
            {response && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">响应结果:</h2>
                    <p className="text-gray-700">{response}</p>
                </div>
            )}
        </div>
    );
};

export default LLMPage;   