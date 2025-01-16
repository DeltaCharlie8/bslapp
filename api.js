//This folder contains functions that connect the frontend and backend.
import axios from 'axios';

// Base URL of the backend
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

// Get all items from BSL_Library
export const getBSLLibrary = async () => {
    try {
        const response = await axios.get(`${API_URL}/bsl_library`);
        return response.data;
    } catch (error) {
        console.error('Error fetching BSL library:', error);
        throw error;
    }
};