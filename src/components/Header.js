import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { Avatar } from "@material-ui/core"
import { useStateProvider } from '../StateProvider';
import './Header.css'


function Header() {
const [{ user }, dispatch] = useStateProvider()



  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input placeholder="Search" type="text" /> 
      </div>
      <div className="header-right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
