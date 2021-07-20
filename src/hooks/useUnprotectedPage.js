import {useLayoutEffect} from "react"
import {useHistory} from "react-router-dom";
import {goToMusicPage} from "../routes/coordinator"

export const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token) {
            goToMusicPage(history)
        }
    }, [history])
}