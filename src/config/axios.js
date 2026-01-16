import axios from 'axios';
const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 0,
    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
    withCredentials: true,
});

export default apiInstance;
