import { API_URL } from '../config.js';
import axios from 'axios';

export const getQuestions = () => axios.get(`${API_URL}/question`);

export const getQuestion = id => axios.get(`${API_URL}/question/${id}`);

export const createQuestion = data => axios.post(`${API_URL}/question`, data);

export const updateQuestion = (id, data) => axios.put(`${API_URL}/question/${id}`, data);

export const removeQuestion = (id) => axios.delete(`${API_URL}/question/${id}`);