import axios from 'axios'
import favoriteReducer from '../store/store';
import store from '../store/store';

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        "api_key": "0545bb1349bf030bd217f093a99f60a4"
    }

})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatech(favoriteReducer())
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance