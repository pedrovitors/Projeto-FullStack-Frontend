export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSignupPage = (history) => {
    history.push("/signup")
}

export const goToMusicPage = (history) => {
    history.push("/")
}

export const goToAddMusicPage = (history) => {
    history.push("/add-music")
}

export const goToMusicDetailsPage = (history, id) => {
    history.push(`/music-details/${id}`)
}

