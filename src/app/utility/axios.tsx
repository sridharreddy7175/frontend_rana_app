import axios from 'axios';
import { toast } from 'react-toastify';
import appConfig from '../../config/constant';
const API = axios.create({
    baseURL: "http://localhost:8850"
});


API.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');
    const contentType = config.headers["Content-Type"];
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    if (contentType === "multipart/form-data") {
        // Set the Content-Type to multipart/form-data
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "multipart/form-data";
      }
    return config;
});

API.interceptors.response.use(
    (response) => {
        console.log("response==>",response)
        if (response.data) {
            return response.data;
        }
        else {
            return response.data ? response.data : {};
        }
    }, (error) => {
        if (error?.response?.status === 401) {
            window.location.href = '/';
            toast.error("Session expired");
        }
        return error.response && error.response.data ? error.response.data : {};
    }
);


export default API;