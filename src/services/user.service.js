import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    saveUser: (user) => axiosService.post(`${urls.users}/save`, user),
    getAllUsers: () => axiosService.get(`${urls.users}`),
    deleteUserById: (id) => axiosService.delete(`${urls.users}/delete/${id}`),
    updateUser: (user, id) => axiosService.put(`${urls.users}/update?id=${id}`, user),
    saveUserPhoto: (formData) => axiosService.post(`${urls.users}/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }),
    getUserPhoto: (photo) => axiosService.get(`${urls.users}/photo/${photo}`, {
        responseType: 'blob'
    })
}

export {
    userService
}