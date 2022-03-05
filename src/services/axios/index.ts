import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export {};

const config: AxiosRequestConfig = {
  baseURL: 'http://localhost:5001/auth-test-72672/us-central1/api',
};

const api: AxiosInstance = axios.create(config);

export default api;
