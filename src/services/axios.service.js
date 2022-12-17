import axios from "axios";
import {createBrowserHistory} from "history"

import {baseURL} from "../constants";
import {authService} from "./auth.service";


const history = createBrowserHistory();

const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use((config) => {
    const accessToken = authService.getAccessToken();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
})

axiosService.interceptors.response.use((config) => {
        return config
    },
    (error) => {
        if ((error.response?.status === 500 || error.response?.status === 403) && error.config) {
            authService.deleteAccessToken()
            return history.replace('/login')
        }
        return Promise.reject(error)
    })

export {
    axiosService,
    history
}