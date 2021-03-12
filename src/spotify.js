export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "99a4db44c90b4f9780907c8f3aa20b54"

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
]

export const getTokenFromResponse = () => {
  return window.location.hash.substring(1).split('&').reduce((init, item) =>{
    let parts = item.split('=');
    init[parts[0]] = decodeURIComponent(parts[1])

    return init
  }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
