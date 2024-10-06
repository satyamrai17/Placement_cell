
// src/shared/services/api-client.js
import axios from 'axios';

const apiCompany = axios.create({
    baseURL: 'http://localhost:8789', // Change this to your backend URL
    headers: {
        'Content-Type': 'application/json'
    }
});

export { apiCompany };
