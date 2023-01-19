import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1';

export const axiosGet = axios.create({
   baseURL: API_URL,
   method: 'get',
   timeout: 15000,
});

export const axiosPost = axios.create({
   baseURL: API_URL,
   method: 'post',
   timeout: 15000,
});

export const axiosPut = axios.create({
   baseURL: API_URL,
   method: 'put',
   timeout: 15000,
});

export const axiosDelete = axios.create({
   baseURL: API_URL,
   method: 'delete',
   timeout: 15000,
});
