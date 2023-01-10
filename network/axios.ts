import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:1337/api',
})

export default axiosClient
