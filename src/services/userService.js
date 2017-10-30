import { API_URL } from '../config.js';
import axios from 'axios';

export const createUser = (payload) => axios.post(`${API_URL}/user`, payload);

export const signUpUSer = (data) => axios.post(`${API_URL}/signup`, data);

export const getUser = (id) => axios.get(`${API_URL}/user/${id}`);

export const getUsers = () => axios.get(`${API_URL}/user`);

export const updateUserByID = (userID, payload) => axios.put(`${API_URL}/user/${userID}`, payload);

export const removeUser = (userID) => axios.delete(`${API_URL}/user/${userID}`)