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

// BSL Letters Video
export const findVideo = async (letter) => {
    try {
        const response = await axios.get(`${API_URL}/videos/${letter}`);

        if (response.data && response.data.VideoURL) {
            return response.data.VideoURL;
        } else {
            console.error(`No video found for ${letter}`);
            return null;
        }
    } catch (error) {
        console.error("Error finding video:", error.response ? error.response.data : error.message);
        return null;
    }
};

// BSL Numbers Video
export const findNumbers = async (number) => {
    try {
        const response = await axios.get(`${API_URL}/numbers/${number}`);

        if (response.data && response.data.VideoURL) {
            return response.data.VideoURL;
        } else {
            console.error(`No video found for ${number}`);
            return null;
        }
    } catch (error) {
        console.error("Error finding video:", error.response ? error.response.data : error.message);
        return null;
    }
};