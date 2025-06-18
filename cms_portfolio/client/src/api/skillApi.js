import axios from 'axios';
import API from '../config/api';

export const getAllSkills = async () => {
    const res = await axios.get(`${API}/skills`);
    return res.data;
};

export const addSkill = async (skillData) => {
    const res = await axios.post(`${API}/skills`, skillData);
    return res.data;
};

export const updateSkill = async (id, skillData) => {
    const res = await axios.put(`${API}/skills/${id}`, skillData);
    return res.data;
};

export const deleteSkill = async (id) => {
    const res = await axios.delete(`${API}/skills/${id}`);
    return res.data;
};
