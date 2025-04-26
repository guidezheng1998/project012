import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const instance = axios.create({
    baseURL,
    timeout: 5000
});

instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 400:
                    console.error('请求错误');
                    break;
                case 401:
                    console.error('未授权');
                    break;
                case 500:
                    console.error('服务器错误');
                    break;
                default:
                    console.error('其他错误', error.response.status);
            }
        } else if (error.request) {
            console.error('网络错误');
        } else {
            console.error('请求过程中发生错误', error.message);
        }
        return Promise.reject(error);
    }
);

export const fetchData = async (endpoint) => {
    const response = await instance.get(`/${endpoint}`);
    return response;
};    