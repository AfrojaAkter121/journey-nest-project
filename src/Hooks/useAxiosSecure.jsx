import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';



const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API,
})
const useAxiosSecure = () => {
    const {logOut, user} = useContext(AuthContext)


    axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
    })

    axiosInstance.interceptors.response.use(res => {
        return res
    }, err => {
        if(err.status === 401 || err.status === 403) {
            logOut()
            .then(() => {
                Swal.fire({
                    title: "Unauthorized Access!",
                    text: "Please login again.",
                    icon: "error",
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.reload();
                });
            })
        }
        return Promise.reject(err.response.data || err.message);
    })

    return axiosInstance;
}; 

export default useAxiosSecure;