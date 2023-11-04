import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://3.65.32.166/api/v2/storefront/',
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token && !config.url?.includes('login') && !config.url?.includes('register')) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => {
        alert('Something went wrong')
        throw err;
    },
);

export default axiosInstance;
