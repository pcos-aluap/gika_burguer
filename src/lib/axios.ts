import axios from 'axios'

//const baseUrl = import.meta.env.VITE_BASE_URL as string;
const baseUrl = 'http://localhost:5173'

console.log(baseUrl);

export const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'localhost:8080/'
  },
  baseURL: baseUrl,
})

api.interceptors.request.use(async (config) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return config
})
