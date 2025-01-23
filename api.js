//This folder contains functions that connect the frontend and backend.
import axios from 'axios';

// API URL of the backend
const API_URL = 'http://192.168.1.83:5000'; //this needs changing according to location, also change on the server.

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

// User login
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
};

// BSL Video
export const findVideo = async (letter) => {
    try {
        const ltr = letter;
        console.log('API called: trying to connect to routes.js with letter:', ltr);
        const response = await axios.get(`${API_URL}/videos`, ltr);
        return response.data.VideoURL
    } catch (error) {
        console.error('Error finding video:', error.message);
        throw error;
    }
};