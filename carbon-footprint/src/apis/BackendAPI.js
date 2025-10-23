import axios from "axios";
import { userToken } from "./utils/userLogin";

export const TaskAppBackend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

TaskAppBackend.interceptors.request.use(
    (config) => {
        const token = userToken();
        if (token) {
            config.headers = { Authorization: `Bearer ${token}` };
            console.log("Inside Interceptors.");
        }
        console.log("Run this configuration");
        console.log(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
