import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL as string;

console.log(baseUrl);

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'localhost:8080/'
  },
  baseURL: baseUrl,
})
