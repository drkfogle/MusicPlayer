import React from 'react';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProvider } from '../StateProvider';
import './Sidebar.css'

function Sidebar() {

  const [{ playlists }, dispatch] = useStateProvider()

  return (
    <div>
      <div className="sidebar">
        <img className="logo"  src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/human-skull-in-headphones-on-black-background-konstantin-petrov.jpg" alt=""/>
        <SidebarOptions Icon={HomeIcon} title="Home" />
        <SidebarOptions Icon={SearchIcon} title="Search" />
        <SidebarOptions Icon={LibraryMusicIcon} title= "Library"/>
        <br />
        <strong className="title">Playlists</strong>
        <hr />

        {playlists?.items?.map((playlist) => (
          <SidebarOptions title={playlist.name} />
        ))}

        <SidebarOptions title='Hip-Hop' />
        <SidebarOptions title='Rock' />
        <SidebarOptions title='Rap' />


      </div>
    </div>
  )
}

export default Sidebar
