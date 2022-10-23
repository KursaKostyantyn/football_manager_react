import {axiosService} from "./axios.service";
import {urls} from "../constants";

const playerService = {
    getAllPlayers: () => axiosService.get(`${urls.players}`),
    updatePlayerById: (id, player) => axiosService.put(`${urls.players}/${id}`, player),
    savePlayer: (player) => axiosService.post(`${urls.players}`, player),
    deletePlayerById: (id) => axiosService.delete(`${urls.players}/${id}`)
}

export {
    playerService
}