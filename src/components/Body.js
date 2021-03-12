import React from 'react'
import Header from './Header'
import SongRow from './SongRow'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {useStateProvider} from '../StateProvider'
import './Body.css'


function Body({spotify}) {

  const [{ discover_weekly }, dispatch] = useStateProvider();

  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt=""/>
        <div className="body-info-txt">
          <strong>Playlist</strong>
          <h2>Today's hits</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle"/> 
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}

      </div>

    </div>
  )
}

export default Body
