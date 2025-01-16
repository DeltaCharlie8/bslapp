//This folder contains functions that connect the frontend and backend.
import axios from 'axios';


// API URL of the backend
const API_URL = 'http://192.168.1.83:5000'; 

// Add a new user
export const addUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};