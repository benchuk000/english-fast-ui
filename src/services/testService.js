import { API_URL } from '../config.js';
import axios from 'axios';

// export const getSkillsTest = () => axios.get(`${API_URL}/skills-test`);

export const getTest = data => axios.post(`${API_URL}/generate/test`, data);

export const submitTest = data => axios.post(`${API_URL}/complete/test`, data);
