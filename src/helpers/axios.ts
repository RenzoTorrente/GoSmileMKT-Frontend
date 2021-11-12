import axios from 'axios';
const BASEURL = `http://localhost:${process.env.PORT}/api`;

const axiosIntance = axios.create({
    baseURL:BASEURL,
})
export default axiosIntance;