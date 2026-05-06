import axios from "axios";

//Obs: traga essa baseURL com .env em rsrsrs
export const api = axios.create({
    baseURL: 'http//SEU_IP:5000/api'
})

