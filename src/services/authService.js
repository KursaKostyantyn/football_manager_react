import {axiosService} from "./axios.service";
import {urls} from "../constants";

const _accessTokenKey= 'access'

const authService = {
    register: (user) => axiosService.post(`${urls.register}`, user),
    login: (user) => axiosService.post(`${urls.login}`, user),
    setAccessToken: ({access})=>localStorage.setItem(_accessTokenKey,access),
    deleteAccessToken:()=>localStorage.removeItem(_accessTokenKey),
    getAccessToken: ()=>localStorage.getItem(_accessTokenKey)
}

export {authService}