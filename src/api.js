import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getMessage = async () => {
    try {
        const response = await axios.get(`${API_URL}/message`);
        return response.data;
    } catch (error) {
        console.error('Error fetching message:', error);
        throw error;
    }
};
