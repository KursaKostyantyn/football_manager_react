import {axiosService} from "./axios.service";
import {urls} from "../constants";

const playerService={
    getAllPlayers:()=> {
        console.log(urls.players)
        return axiosService.get(urls.players)
    }
}

export {
    playerService
}