import {axiosService} from "./axios.service";
import {urls} from "../constants";


const clubService = {
    getAllClubs: () => axiosService.get(`${urls.clubs}`),
    updateClubById: (id, club) => axiosService.put(`${urls.clubs}/${id}`, club),
    saveClub: (club) => axiosService.post(`${urls.clubs}`, club),
    deleteClubById: (id) => axiosService.delete(`${urls.clubs}/${id}`),
    addPlayerToClubById: (id, playerId) => axiosService.put(`${urls.clubs}/${id}/add?playerId=${playerId}`),
    playerTransfer: (playerId, donorClubId, recipientClubId) => axiosService.put(`transfer?playerId=${playerId}&donorClubId=${donorClubId}&recipientClubId=${recipientClubId}`),
    saveClubPhoto: (formData)=> axiosService.post(`${urls.clubs}/photo`, formData, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }

}),
    getClubPhoto:(photo)=>axiosService.get(`${urls.clubs}/photo/${photo}`,{
        responseType:'blob'
    })
}

export {clubService}

