import axios from 'axios';

interface User {
    email: string;
    password: string;
}

const API_BASE_URL = 'http://localhost:3000';

export const createUser = async (user: User) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const signIn = async (email: string, password: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users?email=${email}&password=${password}`);
        return response.data[0];
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};
