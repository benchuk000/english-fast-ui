import { API_URL } from '../config.js';
import axios from 'axios';

export const getArticles = () => axios.get(`${API_URL}/article`);

export const getArticle = id => axios.get(`${API_URL}/article/${id}`);

export const createArticle = data => axios.post(`${API_URL}/article`, data);

export const updateArticle = (id, data) => axios.put(`${API_URL}/article/${id}`, data);

export const removeArticle = (id) => axios.delete(`${API_URL}/article/${id}`);