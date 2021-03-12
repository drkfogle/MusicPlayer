import React from 'react'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core"
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <img className="footer-album-img" src="" alt=""/>
          <div className="footer-song-info">
            <h4>Song</h4>
            <p>Artist</p>
          </div>
        </div>
        <div className="footer-center">
          <ShuffleIcon className="footer-white" />
          <SkipPreviousIcon className="footer-icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
          <SkipNextIcon className="footer-icon" />
          <RepeatIcon className="footer-white" />
        </div>
        <div className="footer-right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Footer
