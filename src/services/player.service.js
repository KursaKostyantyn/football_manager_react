import {axiosService} from "./axios.service";
import {urls} from "../constants";

const playerService = {
    getAllPlayers: () => axiosService.get(`${urls.players}`),
    updatePlayerById: (id, player) => axiosService.put(`${urls.players}/${id}`, player),
    savePlayer: (player,customUserLogin) => axiosService.post(`${urls.players}?customUserLogin=${customUserLogin}`, player),
    deletePlayerById: (id) => axiosService.delete(`${urls.players}/${id}`),
    savePlayerPhoto: (formData) => axiosService.post(`${urls.players}/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }),
    getPlayerPhoto: (photo) => axiosService.get(`${urls.players}/photo/${photo}`, {
        responseType: 'blob'
    })

}

export {
    playerService
}