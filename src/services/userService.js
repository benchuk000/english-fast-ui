import { API_URL } from '../config.js';
import axios from 'axios';

export const createUser = (payload) => axios.post(`${API_URL}/user`, payload);

export const signUpUSer = (data) => axios.post(`${API_URL}/signup`, data);

export const getUser = (id) => axios.get(`${API_URL}/user/${id}`);