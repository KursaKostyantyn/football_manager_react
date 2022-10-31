import {axiosService} from "./axios.service";
import {urls} from "../constants";


const clubService = {
    getAllClubs: () => axiosService.get(`${urls.clubs}`),
    updateClubById: (id, club) => axiosService.put(`${urls.clubs}/${id}`, club),
    saveClub: (club) => axiosService.post(`${urls.clubs}`, club),
    deleteClubById: (id) => axiosService.delete(`${urls.clubs}/${id}`),
    addPlayerToClubById: (id, playerId) => axiosService.put(`${urls.clubs}/${id}/add?playerId=${playerId}`),
    playerTransfer: (playerId, donorClubId, recipientClubId) => axiosService.put(`transfer?playerId=${playerId}&donorClubId=${donorClubId}&recipientClubId=${recipientClubId}`)
}

export {clubService}

