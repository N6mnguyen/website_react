import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Update with your actual base URL
});

export default api;
