import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});
console.log(baseURL)

export {
    axiosService
}