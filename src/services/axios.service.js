import axios from "axios";

import {createBrowserHistory} from "history"
import {baseURL} from "../constants";
import {authService} from "./authService";

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

        if (error.response?.status === 500 && error.config) {
            authService.deleteAccessToken()
            return history.replace('/login?ExpSession=true')
        }
        return Promise.reject(error)
    })

export {
    axiosService,
    history
}