import React, {useEffect} from 'react';
import './App.css';
import Login from './components/Login'
import {getTokenFromResponse} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import {useStateProvider} from './StateProvider'

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = ""
    const token_ = hash.access_token;

    if (token_){
      dispatch({
        type: 'SET_TOKEN',
        token: token_ 
      })
      
      spotify.setAccessToken(token_)
      
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcQG8CVjXwdD2').then(res =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res
        })
      })

    }
    console.log("Got Token ", token);
  }, [])
  

  return (
    <div className="App">{token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
