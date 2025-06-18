import axios from 'axios';
import API from '../config/api';

export const getFunFacts = async () => {
    const res = await axios.get(`${API}/funfacts`);
    return res.data;
};

export const addFunFact = async (data) => {
    const res = await axios.post(`${API}/funfacts`, data);
    return res.data;
};

export const updateFunFact = async (id, data) => {
    const res = await axios.put(`${API}/funfacts/${id}`, data);
    return res.data;
};

export const deleteFunFact = async (id) => {
    const res = await axios.delete(`${API}/funfacts/${id}`);
    return res.data;
};
