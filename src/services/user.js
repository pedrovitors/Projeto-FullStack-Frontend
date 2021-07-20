import axios from "axios"
import {BASE_URL} from "../constants/urls"
import {goToMusicPage} from "../routes/coordinator"

export const login = (data, history) => {
    axios.post(`${BASE_URL}/user/login`, data)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            goToMusicPage(history)
        })
        .catch((error) => alert(error.response.data))
}

export const signup = (data, history) => {
    axios.post(`${BASE_URL}/user/signup`, data)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            goToMusicPage(history)
        })
        .catch((error) => alert(error.response.data))
}