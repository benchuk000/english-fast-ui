import { API_URL } from '../config.js';
import axios from 'axios';

export const getSkillsTest = () => axios.get(`${API_URL}/skills-test`);

export const getTests = () => axios.get(`${API_URL}/test`);

export const getTest = id => axios.get(`${API_URL}/test/${id}`);

export const createTest = data => axios.post(`${API_URL}/test`, data);

export const updateTest = (id, data) => axios.put(`${API_URL}/test/${id}`, data);

export const submitTest = (id, data) => axios.post(`${API_URL}/complete/test/${id}`, data);
