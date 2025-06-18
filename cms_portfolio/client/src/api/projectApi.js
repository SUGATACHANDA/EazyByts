import axios from 'axios';
import API from '../config/api';

export const getAllProjects = async () => {
    const res = await axios.get(`${API}/projects`);
    return res.data;
};

export const addProject = async (data) => {
    const res = await axios.post(`${API}/projects`, data);
    return res.data;
};

export const updateProject = async (id, data) => {
    const res = await axios.put(`${API}/projects/${id}`, data);
    return res.data;
};

export const deleteProject = async (id) => {
    const res = await axios.delete(`${API}/projects/${id}`);
    return res.data;
};
