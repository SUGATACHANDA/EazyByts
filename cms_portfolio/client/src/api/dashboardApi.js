import axios from 'axios';
import API from '../config/api';

export const getAdminEmail = async (token) => {
    const response = await axios.get(`${API}/auth/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.email;
};

export const getContactMessages = async (token) => {
    const response = await axios.get(`${API}/contact/all`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
